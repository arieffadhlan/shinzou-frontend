"use client";

import { useSelector } from "react-redux";
import Image from "next/image";
import dayjs from "dayjs";
import 'dayjs/locale/id'

// Set local language
dayjs.locale("id")

const FlightDetails = () => {
  const { searchFlightData } = useSelector((state) => state.flight);
  const { adult, child, baby } = searchFlightData.passengers;

  const flight = localStorage.getItem("selectedDepartureFlight") || null;
  const { airline, originAirport } = JSON.parse(flight);
  const departureTime = dayjs(new Date(`${flight.departure_date} ${flight.departure_time}`));
  const arrivalTime = dayjs(new Date(`${flight.arrival_date} ${flight.arrival_time}`));
  
  return (
    <div className="flex flex-[40%] flex-col gap-3 p-4 rounded-lg bg-white shadow-2xs 2md:p-0 2md:rounded-none 2md:bg-transparent 2md:shadow-none">
      <span className="font-bold text-sm text-neutral-5 2md:text-lg">Detail Penerbangan</span>
      {/* Departure */}
      <div className="flex flex-col pb-3 border-b border-neutral-2">
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm text-neutral-5">
            {departureTime.format("HH:mm")}
          </span>
          <span className="font-bold text-xs text-primary-3">Keberangkatan</span>
        </div>
        <span className="text-sm text-neutral-5">
          {departureTime.format("D MMMM YYYY")}
        </span>
        <span className="font-medium text-sm text-neutral-5">
          {originAirport.airport_name}
        </span>
      </div>
      {/* Airline and passangers information */}
      <div className="flex flex-col gap-4 pb-3 border-b border-neutral-2">
        <div className="flex flex-col gap-1">
          <Image src={airline.airline_image} alt="Airline" width={24} height={24} />
          <span className="font-bold text-sm">
            {airline.airline_name} - {flight.class} <br /> 
            {flight.flight_number}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm">Informasi:</span>
          <span className="font-normal text-sm">
            {flight.description}
          </span>
        </div>
      </div>
      {/* Arrival */}
      <div className="flex flex-col pb-3 border-b border-neutral-2">
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm text-neutral-5">{arrivalTime.format("HH:mm")}</span>
          <span className="font-bold text-xs text-primary-3">Kedatangan</span>
        </div>
        <span className="text-sm text-neutral-5">
          {departureTime.format("D MMMM YYYY")}
        </span>
        <span className="font-medium text-sm text-neutral-5">
          {originAirport.airport_name}
        </span>
      </div>
      {/* Payment */}
      <div className="flex flex-col gap-1 pb-3 border-b border-neutral-2">
        <span className="font-bold text-sm text-neutral-5">Rincian Harga</span>
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm text-neutral-5">
            {adult + child + baby} Penumpang
          </span>
          <span className="font-medium text-sm text-neutral-5">
            IDR {flight.price?.toLocaleString("id-ID")}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm text-neutral-5">Pajak</span>
          <span className="font-medium text-sm text-neutral-5">IDR 100.000</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-sm text-neutral-5 2md:text-base">Total</span>
        <span className="font-bold text-sm text-primary-4 2md:text-base">
          IDR {(flight.price + 100000).toLocaleString("id-ID")}
        </span>
      </div>
    </div>
  )
}

export default FlightDetails;