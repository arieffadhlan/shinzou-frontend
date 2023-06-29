import { Suspense } from "react";
import Navbar from "@/components/organisms/Navbar";
import Loading from "./loading";

 const SearchFlightLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </main>
    </>
  )
}

export default SearchFlightLayout;