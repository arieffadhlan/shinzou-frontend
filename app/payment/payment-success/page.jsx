"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { printTicket } from "@/redux/features/transaction/transactionAction";

import Alert from "@/components/atoms/Alert";
import Button from "@/components/atoms/Button";
import ButtonLink from "@/components/atoms/ButtonLink";
import Container from "@/components/templates/Container";
import flightHistoryNotFound from "@/assets/images/flight/not-found.svg";
import { clearTransactionMessage } from "@/redux/features/transaction/transactionSlice";

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const router = useRouter();
	const { transactionData, selectedTransaction, loading, success, error } = useSelector((state) => state.transaction);

  useEffect(() => {
    if (transactionData.hasOwnProperty("status")) dispatch(clearTransactionMessage());
  }, [transactionData]);

  const handlePrintTicket = () => {
    dispatch(printTicket({
      transaction_id: selectedTransaction.id
    }));

    router.refresh();
  }

  return (
    <Container className="mt-32 mt mb-16">
      <div className="flex flex-col items-center gap-9 w-full xs:w-fit xs:mx-auto">
        <div className="flex flex-col items-center gap-4.5">
          <Image src={flightHistoryNotFound} alt="Flight tickets not found" />
          <span className="font-medium text-sm text-center text-black">
						<strong className="font-medium text-primary-4">Selamat!</strong><br />
						Transaksi Pembayaran Tiket Sukses!
          </span>
        </div>
        <div className="flex flex-col w-full gap-3">
					<Button onClick={handlePrintTicket} size="md" variant="primary" loading={loading}>
						Terbitkan Tiket
					</Button>
					<ButtonLink href="/" size="md" variant="primary">
						Cari Penerbangan Lain
					</ButtonLink>
        </div>
      </div>

      {/* Alert */}
      {success && <Alert type="success" message={transactionData?.message} />}
      {error && <Alert type="error" message={transactionData?.message} />}
      <div className="Toastify__toast-auth">
        <ToastContainer />
      </div>
    </Container>
  )
}

export default PaymentSuccess;