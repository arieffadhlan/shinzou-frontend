import Navbar from "@/components/organisms/Navbar";

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