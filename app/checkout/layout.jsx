import Navbar from "@/components/organisms/Navbar";

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