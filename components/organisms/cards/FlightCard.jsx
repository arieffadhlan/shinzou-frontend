"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import dayjs from "dayjs";
import 'dayjs/locale/id'

import { searchFlight } from "@/redux/features/flight/flightAction";
import getTimeDifference from "@/helpers/getTimeDifference";

import Button from "@/components/atoms/Button";
import { setSelectedDepartureFlight } from "@/redux/features/flight/flightSlice";

// Set local language
dayjs.locale("id")

const FlightCard = ({ flight }) => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const { searchFlightData } = useSelector((state) => state.flight);
  const { airline, destinationAirport, originAirport } = flight;
  const [showDetails, setShowDetails] = useState(false);
  
  const departureTime = dayjs(new Date(`${flight.departure_date} ${flight.departure_time}`));
  const arrivalTime = dayjs(new Date(`${flight.arrival_date} ${flight.arrival_time}`));
  const timeDifference = getTimeDifference(departureTime, arrivalTime);
  
  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  }

  const handleSelectFlight = () => {
    const isReturnFlight = searchParams.get("return_date");

    if (isReturnFlight) {
      dispatch(searchFlight({
        location_from: destinationAirport.location, 
        location_to: originAirport.location, 
        departure_date: searchFlightData.return_date, 
        passengers: searchFlightData.passengers, 
        seat_class: flight.class 
      }));
    } 

    dispatch(setSelectedDepartureFlight(flight));
    localStorage.setItem("selectedDepartureFlight", JSON.stringify(flight));
  }

  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col px-4 py-2.5 border-2 border-[#F2F2F2] rounded-lg bg-white shadow-2xs hocus:border-primary-4/50">
          {/* Flight Information */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center gap-2">
                {/* Airline */}
                <Image src={airline.airline_image} alt="Airline" width={24} height={24} />
                <span className="font-medium text-xs text-neutral-5">
                  {airline.airline_name} - {flight.class}
                </span>
              </div>
              {/* Button Expand */}
              <button  
                type="button"
                onClick={handleShowDetails}
                className="flex justify-center items-center border border-[#D0D0D0] rounded-full"
              >
                <span className="material-icons-round text-neutral-4">expand_more</span>
              </button>
            </div>
            <div className="flex flex-col justify-between items-end gap-4 pb-2 2xs:flex-row 2xs:items-center xs:gap-16 2md:gap-10 lg:items-center lg:pb-1.5 xl:gap-16">
              {/* Flight Path */}
              <div className="flex items-center gap-4 w-full px-0 py-0 lg:py-2.5 lg:px-[30px]">
                <div className="flex items-center gap-3 w-full">
                  {/* Departure */}
                  <div className="flex flex-1 flex-col justify-center items-center gap-1 max-w-[48px]">
                    <span className="font-bold text-sm text-neutral-5">
                      {departureTime.format("HH:mm")}
                    </span>
                    <span className="font-medium text-xs text-neutral-5">
                      {originAirport.airport_code}
                    </span>
                  </div>
                  {/* Duration */}
                  <div className="flex flex-2 flex-col justify-center items-center">
                    <span className="font-medium text-xs text-neutral-3">
                      {timeDifference.hourDifference}h {timeDifference.minuteDifference}m
                    </span>
                    <div className="flex items-center w-full">
                      <div className="w-full h-[1px] bg-[#8A8A8A]"></div>
                      <span className="material-icons-round -ml-[5px] !font-bold !text-[8px] text-neutral-3">
                        arrow_forward_ios
                      </span>
                    </div>
                    <span className="font-medium text-xs text-neutral-3">Direct</span>
                  </div>
                  {/* Arrival */}
                  <div className="flex flex-1 flex-col justify-center items-center gap-1 max-w-[48px]">
                    <span className="font-bold text-sm text-neutral-5">
                      {arrivalTime.format("HH:mm")}
                    </span>
                    <span className="font-medium text-xs text-neutral-5">
                      {destinationAirport.airport_code}
                    </span>
                  </div>
                </div>
                <span className="material-icons-round text-primary-5 !hidden lg:!inline-block">
                  work_history
                </span>
              </div>
              {/* Price & Select Flight */}
              <div className="flex flex-row justify-between items-end gap-1.5 w-full pt-4 border-t-[1px] border-[#D0D0D0] 2xs:pt-0 2xs:border-0 lg:py-1.5 2xs:flex-col 2xs:w-auto">
                <span className="whitespace-nowrap font-bold text-base text-primary-4">
                  IDR {flight.price.toLocaleString("id-ID")}
                </span>
                <Button 
                  onClick={handleSelectFlight}
                  size="md" 
                  variant="primary" 
                  className="!px-8 !py-1"
                >
                  Pilih
                </Button>
              </div>
            </div>
          </div>
          {/* Flight Details */}
          <div className={`${showDetails ? "flex" : "hidden"} flex-col px-0 pt-4 pb-2.5 mt-2 border-t-[1px] border-[#8A8A8A] 2xs:pt-[22px] 2xs:mt-[15px] xs:px-4`}>
            <h3 className="font-bold text-sm text-primary-5">
              Detail Penerbangan
            </h3>
            {/* Departure */}
            <div className="flex flex-col justify-center items-center gap-4 mt-1">
              <div className="flex flex-col gap-0.5 w-full text-neutral-5">
                <div className="flex justify-between">
                  <span className="font-normal text-sm">
                    <strong className="font-bold text-base">
                      {departureTime.format("HH:mm")}</strong><br />
                      {departureTime.format("D MMMM YYYY")}
                  </span>
                  <span className="mt-0.5 font-bold text-xs text-primary-3">
                    Keberangkatan
                  </span>
                </div>
                <span className="font-medium text-sm">
                  {originAirport.airport_name}
                </span>
              </div>
              <div className="w-full w h-[1px] bg-[#D0D0D0]"></div>
            </div>
            {/* Airline information */}
            <div className="flex flex-col justify-center items-center gap-4 mt-4">
              <div className="flex flex-col gap-4 w-full text-neutral-5">
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
              <div className="w-full w h-[1px] bg-[#D0D0D0]"></div>
            </div>
            {/* Arrival */}
            <div className="flex flex-col justify-center items-center mt-4">
              <div className="flex flex-col gap-0.5 w-full text-neutral-5">
                <div className="flex justify-between">
                  <span className="font-normal text-sm">
                    <strong className="font-bold text-base">
                      {arrivalTime.format("HH:mm")}
                    </strong><br />
                    {arrivalTime.format("D MMMM YYYY")}
                  </span>
                  <span className="mt-0.5 font-bold text-xs text-primary-3">Kedatangan</span>
                </div>
                <span className="font-medium text-sm">
                  {destinationAirport.airport_name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightCard;