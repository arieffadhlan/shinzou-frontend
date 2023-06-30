"use client";

import Container from "@/components/templates/Container";
import FlightDetails from "@/components/organisms/cards/FlightDetails";
import CheckoutForm from "@/components/templates/CheckoutForm";

export default function OrderHistory() {  
  return (
    <>
      <section className="shadow-xs">
        <Container htmlTag="div" className="flex flex-col gap-6 pt-[102px] pb-6 sm:pt-[132px]">
          <h1 className="font-bold text-xl">Pemesanan</h1>
        </Container>
      </section>
      {/* Order History List */}
      <Container className="my-12">
        <div className="flex flex-col-reverse gap-6 2md:flex-row 2md:gap-15">
          <CheckoutForm />
          <FlightDetails />
        </div>
      </Container>
    </>
  )
}
