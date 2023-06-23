import Navbar from "@/components/layouts/Navbar";

 const OrderHistoryLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default OrderHistoryLayout;