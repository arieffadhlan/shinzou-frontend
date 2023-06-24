'use client'

import { useDispatch } from "react-redux";
import {
  fetchData,
  filterByLocation,
  filterByDateAndTime,
  filterByCapacity,
} from "@/app/features/dataSlices";

import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

import Container from "../layouts/Container";
import FlightLocationModal from '../modals/FlightLocationModal';
import FlightSeatModal from "../modals/FlightSeatModal";
import FlightClassModal from "../modals/FlightClassModal";
import Button from "../Button";

const datePickerOptions = {
  asSingle: true,
  useRange: false,
  placeholder: "Pilih Tanggal",
  primaryColor: "purple" ,
  popoverDirection: "down",
  i18n: "id",
  displayFormat: "DD MMM YYYY",
  inputClassName: "cursor-pointer w-full outline-none font-medium text-sm text-black placeholder:text-primary-4 disabled:placeholder:text-neutral-3 xs:text-base",
  toggleClassName: "hidden"
}

const SearchFlightForm = () => {

  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seatclass, setSeatclass] = useState("");
  const [capacity, setCapacity] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchData()).then(() => {

      if (date && time)
        dispatch(filterByDateAndTime(`${date}T${time}:00.000Z`));

      if (capacity) dispatch(filterByCapacity(capacity));
    });
  };

  const [locationSwap, setLocationSwap] = useState(false);
  const [returnFlight, setReturnFlight] = useState(false);
  const [departureTime, setDepartureTime] = useState(""); 
  const [arrivalTime, setArrivalTime] = useState("");

  const swapLocationHandler = () => {
    setLocationSwap(!locationSwap);
  }

  const returnFlightHandler = () => {
    setReturnFlight(!returnFlight);
  }
    
  const handleDepartureTime = (departureTime) => {
    setDepartureTime(departureTime); 
  } 
  
  const handleArrivalTime = (arrivalTime) => {
    setArrivalTime(arrivalTime); 
  } 
  
  return (
    <Container className="mt-32">
      <form className="flex flex-col gap-8 border border-neutral-2 rounded-xl shadow-xs" onSubmit={handleSearch}>
        <div className="flex flex-col gap-6 px-6 pt-6">
          <h1 className="font-bold text-xl">
            Pilih Jadwal Penerbangan spesial di &nbsp;
            <span className="text-primary-4">Tiketku!</span>
          </h1>
          <div className="flex flex-col gap-4 2lg:gap-9">
            <div className="flex flex-col items-center gap-0 p-2.5 border border-neutral-2 rounded-[10px] xs:px-4 2md:flex-row 2md:gap-9 2md:p-0 2md:border-0"> 
              <div className={`flex items-center gap-5 w-full xs:gap-7 ${locationSwap ? "order-3" : "order-1"}`}>
                <div className="flex items-center gap-3 text-neutral-3">
                  <span className="material-icons-round">flight_takeoff</span>
                  <span className="text-xs xs:text-sm">{locationSwap ? "To" : "From"}</span>
                </div>
                <button 
                  type="button" 
                  data-modal-target="search-flight" 
                  data-modal-toggle="search-flight"
                  className="flex flex-col items-start gap-3 w-full outline-none"
                >
                  <span className="font-medium text-sm text-black xs:text-lg">Jakarta (JKTA)</span>
                  <div className="hidden w-full h-[1px] bg-neutral-2 2md:block"></div>
                </button>
              </div>
              <div className="flex justify-center items-center gap-3 order-2 w-full 2md:w-auto">
                <div className="block w-full h-[1px] bg-neutral-2 2md:hidden"></div>
                <button 
                  type="button" 
                  onClick={swapLocationHandler}
                  className="flex justify-center items-center p-1 border border-primary-4 outline-none rounded-xl bg-black rotate-90 2md:rotate-0"
                >
                  <span className="material-icons-round !text-[20px] text-white xs:!text-[24px]">swap_horiz</span>
                </button>
              </div>
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
                <div className="flex items-center gap-7 w-full">
                  <div className="hidden items-center gap-3 text-neutral-3 2lg:flex">
                    <span className="material-icons-round">calendar_month</span>
                    <span className="text-sm">Date</span>
                  </div>
                  <div className="flex flex-col items-start gap-2 w-full outline-none">
                    <span className="font-medium text-sm text-neutral-3 xs:text-base">Departure</span>
                    <Datepicker 
                      onChange={handleDepartureTime}
                      value={departureTime}
                      {...datePickerOptions}
                    />
                    <div className="w-full h-[1px] bg-neutral-2"></div>
                  </div>
                </div>
                <div className="group flex flex-col items-start gap-2 w-full outline-none" disabled={!returnFlight}>
                  <span className="font-medium text-sm text-neutral-3 xs:text-base">Return</span>
                  <Datepicker 
                    onChange={handleArrivalTime}
                    value={arrivalTime}
                    disabled={!returnFlight}
                    {...datePickerOptions}
                  />
                  <div className="w-full h-[1px] bg-neutral-2"></div>
                </div>
                <div className="flex items-center gap-7 w-full">
                  <div className="hidden items-center gap-3 text-neutral-3 2lg:flex">
                    <span className="material-icons-round">airline_seat_recline_normal</span>
                    <span className="text-sm">To</span>
                  </div>
                  <button 
                    type="button" 
                    data-modal-target="flight-seat" 
                    data-modal-toggle="flight-seat"
                    className="flex flex-col items-start gap-2 w-full outline-none"
                  >
                    <span className="font-medium text-sm text-neutral-3 xs:text-base">Passengers</span>
                    <span className="font-medium text-sm text-black xs:text-base">2 Penumpang</span>
                    <div className="w-full h-[1px] bg-neutral-2"></div>
                  </button>
                </div>
                <button 
                  type="button" 
                  data-modal-target="flight-class" 
                  data-modal-toggle="flight-class"
                  className="flex flex-col items-start gap-2 w-full outline-none"
                >
                  <span className="font-medium text-sm text-neutral-3 xs:text-base">Seat Class</span>
                  <span className="font-medium text-sm text-black xs:text-base">Business</span>
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
      <FlightLocationModal />
      <FlightSeatModal />
      <FlightClassModal />
    </Container>
  )
}

export default SearchFlightForm;
