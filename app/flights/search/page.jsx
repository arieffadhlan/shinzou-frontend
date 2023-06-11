import Image from "next/image";

import { flights } from "@/constants/flights";
import Container from "@/components/layouts/Container";
import PilihPenerbangan from "@/components/PilihPenerbangan"
import FlightCard from "@/components/FlightCard";

import ticketsSoldOut from "@/assets/images/flight/tickets-sold-out.svg";
import ticketsNotFound from "@/assets/images/flight/tickets-not-found.svg";

const SearchFlight = () => {
  const flightTicketsStatus = "available"; 
  
  return (
    <>
      <PilihPenerbangan></PilihPenerbangan>
      {flightTicketsStatus === "available" ? (
        <>
          <Container className="flex justify-end mt-6">
            <button type="button" className="flex items-center gap-2 px-3 py-1.5 border border-primary-4 rounded-2xl font-medium text-xs leading-[18px] text-primary-4 hocus:border-primary-3 hocus:bg-primary-3 hocus:text-white active:border-primary-5 active:bg-primary-5 active:text-white">
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
                    <span className="material-icons-round text-[#D0D0D0]">work</span>
                    <span className="w-[156px] text-base text-[#151515] group-hover:text-black">Transit</span>
                  </div>
                  <span className="material-icons-round text-[#D0D0D0] group-hover:text-[#8A8A8A]">chevron_right</span>
                </div>
                <div className="group cursor-pointer flex justify-between items-center pb-4 border-b border-[#D0D0D0]">
                  <div className="flex items-center gap-2">
                    <span className="material-icons-round text-[#D0D0D0]">favorite</span>
                    <span className="w-[156px] text-base text-[#151515] group-hover:text-black">Fasilitas</span>
                  </div>
                  <span className="material-icons-round text-[#D0D0D0] group-hover:text-[#8A8A8A]">chevron_right</span>
                </div>
                <div className="group cursor-pointer flex justify-between items-center pb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-icons-round text-[#D0D0D0]">attach_money</span>
                    <span className="w-[156px] text-base text-[#151515] group-hover:text-black">Harga</span>
                  </div>
                  <span className="material-icons-round text-[#D0D0D0] group-hover:text-[#8A8A8A]">chevron_right</span>
                </div>
              </div>
            </div>
            {flights.length > 0 ? (
              <div className="flex flex-col gap-4 w-full">
                {flights.map((flight) => <FlightCard key={flight.id} props={flight} /> )}
              </div>
            ): (
              <div className="flex flex-col justify-center items-center gap-6 w-full">
                <Image src={ticketsNotFound} alt="Flight tickets not found" />
                <span className="font-medium text-sm text-center text-black">
                  Maaf, pencarian Anda tidak ditemukan <br />
                  <strong className="font-medium text-primary-4">Coba cari perjalanan lainnya!</strong>
                </span>
              </div>
            )}
          </Container>
        </>
      ) : (
        <Container className="flex flex-col justify-center items-center gap-9 my-[100px]">
          <Image src={ticketsSoldOut} alt="Flight tickets sold out" />
          <span className="font-medium text-sm text-center text-black">
            Maaf, tiket terjual habis! <br />
            <strong className="font-medium text-primary-4">Coba cari perjalanan lainnya!</strong>
          </span>
        </Container>
      )}
    </>
  )
}

export default SearchFlight;