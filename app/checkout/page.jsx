"use client";

import Container from "@/components/layouts/Container";
import FlightDetails from "@/components/flights/FlightDetails";
import ButtonLink from "@/components/ButtonLink";
import CheckoutForm from "@/components/forms/CheckoutForm";

export default function OrderHistory() {  
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
              className="justify-start gap-3 w-full px-4 bg-primary-3 xs:gap-4.5"
            >
              <span className="material-icons-round">arrow_back</span>
              Beranda
            </ButtonLink>
            <div className="flex justify-end items-center gap-3 w-full sm:w-auto">
              <button type="button" className="flex items-center gap-2 px-3 py-1.5 border border-primary-4 rounded-2xl font-medium text-base text-primary-4 hocus:border-primary-3 hocus:bg-primary-3 hocus:text-neutral-1 active:border-primary-5 active:bg-primary-5 active:text-neutral-1">
                <span className="material-icons-round !text-[20px]">
                  filter_alt
                </span>
                Filter
              </button>
              <button className="material-icons-round text-primary-4">
                search
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Order History List */}
      <Container className="my-12">
        <div className="flex flex-col-reverse gap-6 2md:flex-row 2md:gap-15">
          <CheckoutForm />
          {/* <PassangerForm /> */}
          <FlightDetails />
        </div>
      </Container>
    </>
  )
}
