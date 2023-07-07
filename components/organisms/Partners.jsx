import Image from "next/image";
import airlines from "@/constants/airlines";
import Container from "../templates/Container";
import paymentMethods from "@/constants/payment-methods";

export default function Partners() {
  return (
    <Container className="flex flex-col justify-center items-center gap-12 mt-32">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-xl text-primary-5 sm:text-2xl">
          Mitra Maskapai
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-2 max-w-3xl">
          {airlines.map((airline) => (
            <div key={airline.id} className="flex justify-center items-center w-fit">
              <Image src={airline.image} alt={airline.name} width={100} className="w-16 sm:w-[100px]" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="font-bold text-xl text-primary-5 sm:text-2xl">
          Mitra Pembayaran
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-2 max-w-3xl">
          {paymentMethods.map((payment) => (
            <div key={payment.id} className="flex justify-center items-center w-fit">
              <Image src={payment.image} alt={payment.name} width={64} height="100%" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
