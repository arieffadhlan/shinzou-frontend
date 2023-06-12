import { flights } from "@/constants/flights";

import Container from "@/components/layouts/Container";
import TicketsNotFound from "@/components/flights/TicketsNotFound";
import TicketsSoldOut from "@/components/flights/TicketsSoldOut";
import PilihPenerbangan from "@/components/PilihPenerbangan"
import FlightCard from "@/components/FlightCard";

const SearchFlight = () => {
  const flightTicketsStatus = "available"; 
  
  return (
    <>
      <PilihPenerbangan></PilihPenerbangan>
      {flightTicketsStatus === "available" ? (
        <>
          <Container className="flex justify-end mt-6">
            <button type="button" className="flex items-center gap-2 px-3 py-1.5 border border-primary-4 rounded-2xl font-medium text-xs text-primary-4 hocus:border-primary-3 hocus:bg-primary-3 hocus:text-neutral-1 active:border-primary-5 active:bg-primary-5 active:text-neutral-1">
              <span className="material-icons-round !text-[20px]">
                swap_vert
              </span>
              Termurah
            </button>
          </Container>
          <Container className="flex flex-col gap-7 mt-6 mb-16 2md:flex-row">
            <div className="flex flex-col gap-6 w-full h-fit p-6 rounded-2xl shadow-xs 2md:w-[268px]">
              <h2 className="font-medium text-base text-black">Filter</h2>
              <div className="flex flex-col gap-4">
                <div className="group cursor-pointer flex justify-between items-center pb-4 border-b border-[#D0D0D0]">
                  <div className="flex items-center gap-2">
                    <span className="material-icons-round text-neutral-2">work</span>
                    <span className="w-[156px] text-base text-neutral-5 group-hover:text-black">Transit</span>
                  </div>
                  <span className="material-icons-round text-neutral-2 group-hover:text-neutral-3">chevron_right</span>
                </div>
                <div className="group cursor-pointer flex justify-between items-center pb-4 border-b border-[#D0D0D0]">
                  <div className="flex items-center gap-2">
                    <span className="material-icons-round text-neutral-2">favorite</span>
                    <span className="w-[156px] text-base text-neutral-5 group-hover:text-black">Fasilitas</span>
                  </div>
                  <span className="material-icons-round text-neutral-2 group-hover:text-neutral-3">chevron_right</span>
                </div>
                <div className="group cursor-pointer flex justify-between items-center pb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-icons-round text-neutral-2">attach_money</span>
                    <span className="w-[156px] text-base text-neutral-5 group-hover:text-black">Harga</span>
                  </div>
                  <span className="material-icons-round text-neutral-2 group-hover:text-neutral-3">chevron_right</span>
                </div>
              </div>
            </div>
            {flights.length > 0 ? (
              <div className="flex flex-col gap-4 w-full">
                {flights.map((flight) => <FlightCard key={flight.id} props={flight} /> )}
              </div>
            ): (
              <TicketsNotFound />
            )}
          </Container>
        </>
      ) : (
        <TicketsSoldOut />
      )}
    </>
  )
}

export default SearchFlight;