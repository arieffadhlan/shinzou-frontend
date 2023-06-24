import Navbar from "@/components/layouts/Navbar";

 const CheckoutLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default CheckoutLayout;