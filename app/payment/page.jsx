import Container from "@/components/layouts/Container";
import OrderDetails from "@/components/flights/OrderDetails";
import PaymentMethod from "@/components/payments/PaymentMethod";

const Payment = () => {
  return (
    <>
      <section className="shadow-xs">
        <Container htmlTag="div" className="flex flex-col gap-6 pt-[102px] pb-5 sm:pt-[132px]">
          <h1 className="font-bold text-xl">Pembayaran</h1>
        </Container>
      </section>
      <Container className="my-12">
        <div className="flex flex-col-reverse gap-6 2md:flex-row 2md:gap-15">
          <PaymentMethod />
          <OrderDetails />
        </div>
      </Container>
    </>
  )
}

export default Payment;