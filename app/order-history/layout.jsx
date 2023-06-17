import Navbar from "@/components/layouts/Navbar";
import OrderHistory from "@/components/OrderHistory";

 const OrderHistoryLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <OrderHistory />
        {children}
      </main>
    </>
  )
}

export default OrderHistoryLayout;