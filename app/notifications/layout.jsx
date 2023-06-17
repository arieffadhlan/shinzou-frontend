import Navbar from "@/components/layouts/Navbar";

 const NotificationLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default NotificationLayout;