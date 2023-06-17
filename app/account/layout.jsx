import Navbar from "@/components/layouts/Navbar";

 const AccountLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default AccountLayout;