import Image from "next/image";
import Button from "../atoms/Button";
import gopay from "@/assets/icons/payment-methods/gopay.svg";
import virtualAccount from "@/assets/icons/payment-methods/virtual-account.svg";
import creditCard from "@/assets/icons/payment-methods/credit-card.svg";

const PaymentMethod = () => {
	return(
		<div className="flex flex-[60%] flex-col gap-9">
			<div className="flex flex-col gap-4">
				<h2 className="font-bold text-xl">
					Pilih Metode Pembayaran
				</h2>
				{/* Payment Methods */}
				<div className="flex flex-col gap-4">
					<div className="cursor-pointer flex items-center gap-4 py-3.5 px-4 border border-neutral-2 rounded-lg bg-neutral-1 text-neutral-5 shadow-2xs">
						<div className="flex justify-center items-center w-12 xs:w-14">
							<Image 
								src={gopay} 
								alt="Gopay" 
								priority={true} 
								width={48}
							/>
						</div>
						<span className="font-medium text-sm xs:text-base">Gopay</span>
					</div>
					<div className="cursor-pointer flex items-center gap-4 py-3.5 px-4 border border-neutral-2 rounded-lg bg-neutral-1 text-neutral-5 shadow-2xs">
						<div className="flex justify-center items-center w-12 xs:w-14">
							<Image 
								src={virtualAccount} 
								alt="Virtual Account" 
								priority={true} 
								width={24}
							/>
						</div>
						<span className="font-medium text-sm xs:text-base">Virtual Account</span>
					</div>
					<div className="cursor-pointer flex items-center gap-4 py-3.5 px-4 border border-neutral-2 rounded-lg bg-neutral-1 text-neutral-5 shadow-2xs">
						<div className="flex justify-center items-center w-12 xs:w-14">
							<Image 
								src={creditCard} 
								alt="Credit Card" 
								priority={true} 
								width={28}
							/>
						</div>
						<span className="font-medium text-sm xs:text-base">Credit Card</span>
					</div>
				</div>
			</div>
			<Button 
        type="submit" 
        size="xl" 
        variant="primary" 
        className="w-full py-3.5 text-sm 2md:py-4 2md:text-xl"
      >
				Bayar
      </Button>
		</div>
	)
}

export default PaymentMethod;