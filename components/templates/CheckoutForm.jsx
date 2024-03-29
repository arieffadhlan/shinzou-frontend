import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

import { checkout } from "@/redux/features/transaction/transactionAction";

import Button from "../atoms/Button";
import PassangerForm from "../organisms/forms/CheckoutPassangersForm";
import SeatForm from "../organisms/forms/CheckoutSeatForm";
import UserForm from "../organisms/forms/CheckoutUserForm";

 const CheckoutForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { searchFlightData, selectedDepartureFlight, selectedReturnFlight } = useSelector((state) => state.flight);
  const { adult, child, baby } = searchFlightData.passengers;
  const totalPassengers = adult + child + baby;
  const [passengers, setPassengers] = useState(
    Array.from(Array(totalPassengers), () => ({
      title: "",
      name: "",
      family_name: "",
      identity_number: "",
      phone_number: "",
      seat_number: ""
    }))
  );

  const tax = selectedReturnFlight.hasOwnProperty("id") 
  ? ((selectedDepartureFlight.price * (10/100)) + (selectedReturnFlight.price * (10/100)))
  : selectedDepartureFlight.price * (10/100)

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const check = passengers.filter((e) => {
      return e.title === "" || e.name === "" || e.identity_number === "" || e.phone_number === "" || e.seat_number === "";
    });

    if (check.length > 0) {
      alert("semua form harus diisi");
    } else {
      dispatch(checkout({
        departure_flight_id: selectedDepartureFlight.id,
        return_flight_id: selectedReturnFlight.hasOwnProperty("id") ? selectedReturnFlight.id : null,
        passengers,
        ammount: selectedReturnFlight.hasOwnProperty("id") 
          ? selectedDepartureFlight.price + selectedReturnFlight.price + tax
          : selectedDepartureFlight.price + tax  
      }));
  
      router.push("/payment");
    }
  }
  
  return (
    <form onSubmit={handleFormSubmit} className="flex flex-[60%] flex-col gap-9">
      <UserForm />
      <PassangerForm 
        totalPassengers={totalPassengers}
        passengers={passengers} 
        setPassengers={setPassengers} 
      />
      <SeatForm
        totalPassengers={totalPassengers}
        passengers={passengers} 
        setPassengers={setPassengers} 
      />
      <Button 
        type="submit" 
        size="xl" 
        variant="primary" 
        className="w-full py-3.5 text-sm 2md:py-4 2md:text-xl"
      >
				Simpan
      </Button>

      {/* Alert */}
      <div className="Toastify__toast-auth">
        <ToastContainer />
      </div>
    </form>
  )
}

export default CheckoutForm;