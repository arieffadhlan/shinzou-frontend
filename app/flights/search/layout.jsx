import Navbar from "@/components/layouts/Navbar";

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