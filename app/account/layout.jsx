import Navbar from "@/components/organisms/Navbar";

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