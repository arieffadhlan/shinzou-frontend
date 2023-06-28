import Navbar from "@/components/organisms/Navbar";

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