import Navbar from "@/components/organisms/Navbar";

 const SearchFlightLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default SearchFlightLayout;