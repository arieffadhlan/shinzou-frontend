"use client"

import { useSelector } from "react-redux";

import FlightCard from "@/components/organisms/cards/FlightCard";
import FlightFilterCard from "@/components/organisms/cards/FlightFilterCard";
import Container from "@/components/templates/Container";
import PilihPenerbangan from "@/components/templates/PilihPenerbangan"
import TicketsNotFound from "@/components/templates/TicketsNotFound";
import TicketsSoldOut from "@/components/templates/TicketsSoldOut";

const SearchFlight = () => {
  const { flights } = useSelector((state) => state.flight);
  
  return (
    <>
      <PilihPenerbangan></PilihPenerbangan>
      <Container className="flex flex-col gap-7 my-16 2md:flex-row">
        <FlightFilterCard />
        {flights.length > 0 ? (
          <div className="flex flex-col gap-4 w-full">
            {flights.map((flight) => flight.capacity !== 0 
              ? <FlightCard key={flight.id} flight={flight} />
              : <TicketsSoldOut />
            )}
          </div>
        ) : <TicketsNotFound />}
      </Container>
    </>
  )
}

export default SearchFlight;