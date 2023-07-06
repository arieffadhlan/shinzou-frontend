"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import { clearFlightState } from "@/redux/features/flight/flightSlice";
import { clearSelectedPaymentMethod, clearTransactionMessage, setSelectedTransaction } from "@/redux/features/transaction/transactionSlice";
import { getTransactions } from "@/redux/features/transaction/transactionAction";

import ButtonLink from "@/components/atoms/ButtonLink";
import OrderHistoryCard from "@/components/organisms/cards/OrderHistoryCard";
import OrderHistoryDetails from "@/components/organisms/cards/OrderHistoryDetails";
import Container from "@/components/templates/Container";
import Input from "@/components/atoms/Input";
import Alert from "@/components/atoms/Alert";

export default function OrderHistory() {  
  const dispatch = useDispatch();
  const { transactions, transactionData, selectedTransaction, success, error } = useSelector((state) => state.transaction);
  const { user } = useSelector((state) => state.auth);
  const [bookingCode, setBookingCode] = useState("");

  useEffect(() => {
    if (transactionData.hasOwnProperty("status")) dispatch(clearTransactionMessage());
  }, [transactionData]);
  
  useEffect(() => {
    dispatch(clearFlightState());
    dispatch(clearSelectedPaymentMethod());
    dispatch(getTransactions());
  }, []);

  const userTransactions = transactions.filter((transaction) => {
    return transaction.user_id === user.data.id
  });

  useEffect(() => {
    if (userTransactions.length > 0 && selectedTransaction?.id === userTransactions[0]?.id) {
      dispatch(setSelectedTransaction(userTransactions[0]));
    }
  }, [userTransactions])

  const userTransactionsFiltered = userTransactions.filter((transaction) => {
    if (transaction.booking_code === bookingCode) {
      return transactions;
    }
    
    if (transaction.returnFlight && transaction.booking_code === bookingCode) {
      return transactions;
    }
  });

  const handleOnChange = (event) => {
    setBookingCode(event.target.value);
  }
  
  return (
    <>
      <section className="shadow-xs">
        <Container htmlTag="div" className="flex flex-col gap-6 pt-[102px] pb-5 sm:pt-[132px]">
          <h1 className="font-bold text-xl">
            Riwayat Pemesanan
          </h1>
          <div className="flex flex-col items-center gap-5 w-full sm:flex-row sm:gap-3">
            <ButtonLink 
              href="/" 
              size="lg" 
              variant="primary" 
              className="flex-[60%] justify-start gap-3 w-full px-4 bg-primary-3 xs:gap-4.5"
            >
              <span className="material-icons-round">arrow_back</span>
              Beranda
            </ButtonLink>
            <Input 
              type="text" 
              onChange={handleOnChange} 
              variant="secondary" 
              name="flight_number" 
              hookForm={false} 
              placeholder="Cari kode transaksi..." 
              className="w-full" />
          </div>
        </Container>
      </section>

      {/* Order History List */}
      <Container className="my-[64px]">
        {bookingCode !== "" && userTransactionsFiltered.length > 0 ? (
          <div className="flex gap-10">
            <div className="flex flex-[60%] flex-col gap-4">
              {userTransactionsFiltered.map((transaction, index) => (
                <OrderHistoryCard key={index} data={transaction} />
              ))}
            </div>
            <OrderHistoryDetails />
          </div>
        ) : (
          userTransactions.length > 0 ? (
            <div className="flex gap-10">
              <div className="flex flex-[60%] flex-col gap-4">
                {userTransactions.map((transaction, index) => (
                  <OrderHistoryCard key={index} data={transaction} />
                ))}
              </div>
              <OrderHistoryDetails />
            </div>
          ) : (
            <div>riwayat transaksi kosong</div>
          )
        )}

        {/* Alert */}
        {success && <Alert type="success" message={transactionData?.message} />}
        {error && <Alert
         type="error" message={transactionData?.message} />}
        <div className="Toastify__toast-auth">
          <ToastContainer />
        </div>
      </Container>
    </>
  )
}
