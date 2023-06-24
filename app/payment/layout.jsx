import Navbar from "@/components/layouts/Navbar";

 const PaymentLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default PaymentLayout;