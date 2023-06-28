"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";

import { setSearchFlight } from "@/redux/features/flight/flightSlice";
import { openModal } from "@/redux/features/modal/modalSlice";

import Container from "./Container";
import Button from "../atoms/Button";
import Modal from "../molecules/Modal";
import FlightClassModal from "../organisms/modals/FlightClassModal";
import FlightLocationModal from "../organisms/modals/FlightLocationModal";
import FlightSeatModal from "../organisms/modals/FlightSeatModal";
import { searchFlight } from "@/redux/features/flight/flightAction";
import { useRouter, useSearchParams } from "next/navigation";

const SearchFlightForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { searchFlightData, success } = useSelector((state) => state.flight);
  const { modalId, show } = useSelector((state) => state.modal);
  const { adult, child, baby } = searchFlightData.passengers;

  const [locationSwap, setLocationSwap] = useState(false);
  const [returnFlight, setReturnFlight] = useState(false);
  const [queryParams, setQueryParams] = useState("");

  useEffect(() => {
    if (success) {
      router.push(`/flights/search?${queryParams}`)
    }
  }, [success]);

  const swapLocationHandler = () => {
    setLocationSwap(!locationSwap);
  }
  
  const returnFlightHandler = () => {
    if (!returnFlight) {
      dispatch(setSearchFlight({
        ...searchFlightData,
        return_date: dayjs(new Date()).format("YYYY-MM-DD"),
      }));
    }
    setReturnFlight(!returnFlight);
  }
    
  const handleDepartureDate = (event) => {
    dispatch(setSearchFlight({
      ...searchFlightData,
			departure_date: event.target.value
		}));
  } 
  
  const handleReturnDate = (event) => {
		dispatch(setSearchFlight({
			...searchFlightData,
			return_date: event.target.value
		}));
  } 

  const handleOnSubmit = (event) => {
    event.preventDefault();

    // Set query params
    const params = new URLSearchParams(searchParams);
    for (let [key, value] of Object.entries(searchFlightData)) {
      params.set(key, value);
    }
    setQueryParams(params.toString());
    
    dispatch(searchFlight(searchFlightData));
  }

  return (
    <Container className="mt-32">
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-8 border border-neutral-2 rounded-xl shadow-xs">
      <div className="flex flex-col gap-6 px-6 pt-6">
        <h1 className="font-bold text-xl">
          Pilih Jadwal Penerbangan spesial di &nbsp;
          <span className="text-primary-4">Tiketku!</span>
        </h1>
        <div className="flex flex-col gap-4 2lg:gap-9">
          <div className="flex flex-col items-center gap-0 p-2.5 border border-neutral-2 rounded-[10px] xs:px-4 2md:flex-row 2md:gap-9 2md:p-0 2md:border-0"> 
            {/* Location from */}
            <div className={`flex items-center gap-5 w-full xs:gap-7 ${locationSwap ? "order-3" : "order-1"}`}>
              <div className="flex items-center gap-3 text-neutral-3">
                <span className="material-icons-round">flight_takeoff</span>
                <span className="text-xs xs:text-sm">{locationSwap ? "To" : "From"}</span>
              </div>
              <button type="button" className="flex flex-col items-start gap-3 w-full outline-none">
                <span className="font-medium text-sm text-black xs:text-lg">Jakarta (JKTA)</span>
                <div className="hidden w-full h-[1px] bg-neutral-2 2md:block"></div>
              </button>
            </div>
            {/* Swap location */}
            <div className="flex justify-center items-center gap-3 order-2 w-full 2md:w-auto">
              <div className="block w-full h-[1px] bg-neutral-2 2md:hidden"></div>
              <button type="button" onClick={swapLocationHandler} className="flex justify-center items-center p-1 border border-primary-4 outline-none rounded-xl bg-black rotate-90 2md:rotate-0">
                <span className="material-icons-round !text-[20px] text-white xs:!text-[24px]">swap_horiz</span>
              </button>
            </div>
            {/* Location to */}
            <div className={`flex items-center gap-5 w-full xs:gap-7 ${locationSwap ? "order-1" : "order-3"}`}>
              <div className="flex items-center gap-3 text-neutral-3">
                <span className="material-icons-round">flight_takeoff</span>
                <span className="text-xs xs:text-sm">{locationSwap ? "From" : "To"}</span>
              </div>
              <button type="button" className="flex flex-col items-start gap-3 w-full outline-none">
                <span className="font-medium text-sm text-black xs:text-lg">Melbourne (MLB)</span>
                <div className="hidden w-full h-[1px] bg-neutral-2 2md:block"></div>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {/* Set return flight */}
            <div className="flex justify-between items-center gap-0 2lg:justify-end 2lg:gap-4">
              <span className="font-medium text-sm text-black xs:text-base">Pulang-Pergi?</span>
              <div className="relative flex justify-center">
                <label htmlFor="return" className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" id="return" onChange={returnFlightHandler} className="sr-only peer" readOnly />
                  <div className="peer w-10 h-6 p-0.5 rounded-full bg-neutral-2 after:content-[''] after:absolute after:w-5 after:h-5 after:rounded-[20px] after:bg-white after:transition-all peer-checked:after:-left-[2px] peer-checked:after:border-white peer-checked:bg-primary-5 peer-checked:after:translate-x-full"></div>
                </label>
              </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-2 place-items-center gap-7 2lg:grid-rows-1 2lg:grid-cols-4">
              {/* Departure date */}
              <div className="flex items-center gap-7 w-full">
                <div className="hidden items-center gap-3 text-neutral-3 2lg:flex">
                  <span className="material-icons-round">calendar_month</span>
                  <span className="text-sm">Date</span>
                </div>
                <div className="relative flex flex-col items-start gap-2 w-full outline-none">
                  <span className="font-medium text-sm text-neutral-3 xs:text-base">Departure</span>
                  <input 
                    type="date"
                    onChange={handleDepartureDate}
                    value={searchFlightData.departure_date}
                    className="datepicker"
                  />
                  <div className="w-full h-[1px] bg-neutral-2"></div>
                </div>
              </div>
              {/* Return date */}
              <div className="relative group flex flex-col items-start gap-2 w-full outline-none" disabled={!returnFlight}>
                <span className="font-medium text-sm text-neutral-3 xs:text-base">Return</span>
                <input 
                  type={`${returnFlight ? "date" : "text"}`}
                  onChange={handleReturnDate}
                  value={returnFlight ? searchFlightData.return_date : ""}
                  className="datepicker"
                  placeholder="Pilih Tanggal"
                  disabled={!returnFlight}
                />
                <div className="w-full h-[1px] bg-neutral-2"></div>
              </div>
              {/* Passangers */}
              <div id="flight-seat" className="flex items-center gap-7 w-full">
                <div className="hidden items-center gap-3 text-neutral-3 2lg:flex">
                  <span className="material-icons-round">airline_seat_recline_normal</span>
                  <span className="text-sm">To</span>
                </div>
                <button type="button" onClick={() => dispatch(openModal("flight-seat"))} className="flex flex-col items-start gap-2 w-full outline-none">
                  <span className="font-medium text-sm text-neutral-3 xs:text-base">Passengers</span>
                  <span className="font-medium text-sm text-black xs:text-base">
                    {adult + child + baby} Penumpang
                  </span>
                  <div className="w-full h-[1px] bg-neutral-2"></div>
                </button>
              </div>
              {/* Class */}
              <button type="button" onClick={() => dispatch(openModal("flight-class"))} className="flex flex-col items-start gap-2 w-full outline-none">
                <span className="font-medium text-sm text-neutral-3 xs:text-base">Seat Class</span>
                <span className="font-medium text-sm text-black xs:text-base">{searchFlightData.seat_class}</span>
                <div className="w-full h-[1px] bg-neutral-2"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Button
        type="submit"
        size="lg"
        variant="primary"
        className="rounded-t-none rounded-b-xl font-bold"
      >
        Cari Penerbangan
      </Button>
    </form>

    {/* Modals */}
    {show && (
      <Modal>
        {modalId === "flight-location" 
          ? <FlightLocationModal data={searchFlightData} />
          : modalId === "flight-seat" 
          ? <FlightSeatModal data={searchFlightData} />
          : <FlightClassModal data={searchFlightData} />
        }
      </Modal>
    )}
  </Container>
  )
}

export default SearchFlightForm;
