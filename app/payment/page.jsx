"use client";

import Container from "@/components/templates/Container";
import FlightDetails from "@/components/organisms/cards/FlightDetails";
import PaymentMethod from "@/components/templates/PaymentMethod";

const Payment = () => {
  return (
    <>
      <section className="shadow-xs">
        <Container htmlTag="div" className="flex flex-col gap-6 pt-[102px] pb-5 sm:pt-[132px]">
          <h1 className="font-bold text-xl">
            Pembayaran
          </h1>
        </Container>
      </section>
      <Container className="my-12">
        <div className="flex flex-col-reverse gap-6 2md:flex-row 2md:gap-15">
          <PaymentMethod />
          <FlightDetails />
        </div>
      </Container>
    </>
  )
}

export default Payment;