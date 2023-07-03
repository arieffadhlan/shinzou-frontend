import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { setSelectedPaymentMethod } from "@/redux/features/transaction/transactionSlice";
import { payment } from "@/redux/features/transaction/transactionAction";
import paymentMethods from "@/constants/payment-methods";

import Button from "../atoms/Button";

const PaymentMethod = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { selectedTransaction, selectedPaymentMethod } = useSelector((state) => state.transaction);
	
	const handleSelectedPaymentMethod = (paymentMethod) => {
		dispatch(setSelectedPaymentMethod(paymentMethod));
	}

	const handleOnSubmit = (event) => {
		event.preventDefault();

		dispatch(payment({
			booking_code: selectedTransaction.booking_code,
			payment_method: selectedPaymentMethod
		}));

		router.push("/order-history");
	}

	return(
		<form onSubmit={handleOnSubmit} className="flex flex-[60%] flex-col gap-9">
			<div className="flex flex-col gap-4">
				<h2 className="font-bold text-xl">
					Pilih Metode Pembayaran
				</h2>
				{/* Payment Methods */}
				<div className="flex flex-col gap-4">
					{paymentMethods.map((paymentMethod) => (
						<button
							type="button"
							key={paymentMethod.id} 
							onClick={() => handleSelectedPaymentMethod(paymentMethod.name)} 
							className={`${selectedPaymentMethod === paymentMethod.name 
								?	"border-primary-4"
								: "border-neutral-2"}
								flex items-center gap-4 py-3.5 px-4 border rounded-lg bg-neutral-1 text-neutral-5 shadow-2xs`
							}
						>
							<div className="flex justify-center items-center w-12 xs:w-14">
								<Image 
									src={paymentMethod.image} 
									alt={paymentMethod.name} 
									priority={true} 
									width={28} 
								/>
							</div>
							<span className="font-medium text-sm xs:text-base">
								{paymentMethod.name}
							</span>
						</button>
					))}
				</div>
			</div>
			<Button 
        type="submit" 
        size="xl" 
        variant="primary" 
        className="w-full py-3.5 text-sm 2md:py-4 2md:text-xl"
				disabled={!selectedPaymentMethod ? true : false}
      >
				Bayar
      </Button>
		</form>
	)
}

export default PaymentMethod;