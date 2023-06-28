import Navbar from "@/components/organisms/Navbar";

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