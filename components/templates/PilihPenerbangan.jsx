"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";

import { searchFlight } from "@/redux/features/flight/flightAction";
import generateDates from "@/helpers/generateDates";

import Container from "./Container";
import Button from "../atoms/Button";
import ButtonLink from "../atoms/ButtonLink";

const PilihPenerbangan = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const params = useSearchParams();
  const { searchFlightData, flights, selectedDepartureFlight, isReturn } = useSelector((state) => state.flight);
  const [currentFlight, setCurrentFlight] = useState("departure");
  const [currentDates, setCurrentDates] = useState([]);

  const { location_from, location_to, passengers, seat_class } = searchFlightData;
  const { adult, child, baby } = passengers;
  const departureDate = params.get("departure_date");

  useEffect(() => {
    if (selectedDepartureFlight.hasOwnProperty("id")) {
      setCurrentFlight("return");
    }
  }, [selectedDepartureFlight])

  useEffect(() => {
    if (flights.length > 0) {
      let generateDatesResult;
      
      if (isReturn) {
        const returnDate = params.get("return_date");

        if (currentFlight === "departure") {
          generateDatesResult = generateDates(
            new Date(departureDate), 
            new Date(new Date(returnDate).getTime()-(1*24*60*60*1000))
          );
          
          setCurrentDates(generateDatesResult);
        } else {
          generateDatesResult = generateDates(
            new Date(returnDate), 
            new Date(returnDate).getTime()+(6*24*60*60*1000) // 1 week
          );
          
          setCurrentDates(generateDatesResult);
        }

      } else {
        generateDatesResult = generateDates(
          new Date(departureDate), 
          new Date(departureDate).getTime()+(6*24*60*60*1000) // 1 week
        );
        
        setCurrentDates(generateDatesResult);
      }  
    }
  }, [flights]);

  const handleSearchFlight = (date) => {
    if (currentFlight === "return") {
      dispatch(searchFlight({
        ...searchFlightData,
        location_from: searchFlightData.location_to, 
        location_to: searchFlightData.location_from, 
        departure_date: dayjs(date).format("YYYY-MM-DD"), 
      }));
    } else {
      dispatch(searchFlight({
        ...searchFlightData,
        departure_date: dayjs(date).format("YYYY-MM-DD")
      }));
    }
    
    router.refresh();
  }

  return (
    <section className="shadow-xs">
      <Container htmlTag="div" className="flex flex-col gap-6 pt-[102px] pb-5 sm:pt-[132px]">
        <h1 className="font-bold text-xl">
          Pilih Penerbangan
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3 w-full lg:flex-row">
            <ButtonLink 
              href="/" 
              size="md" 
              variant="primary" 
              className="flex-[65%] justify-start gap-3 w-full px-4 bg-primary-3 xs:gap-4.5 lg:w-auto xl:flex-[75%]"
            >
              <span className="material-icons-round">arrow_back</span>
              {location_from} &gt; {location_to} - {adult + child + baby} Penumpang - {seat_class}
            </ButtonLink>
            <Button 
              size="md" 
              variant="success" 
              className="flex-[35%] w-full font-bold lg:w-auto xl:flex-[25%]"
            >
              Ubah Pencarian
            </Button>
          </div>
          <div className="snap-x overflow-scroll no-scrollbar flex items-center gap-2">
            {currentDates.map((date, index) => (
              <React.Fragment key={index}>
                <button type="button" onClick={() => handleSearchFlight(date)} className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
                  <span className="font-bold text-sm text-neutral-5 group-focus:text-neutral-1 group-hover:text-neutral-1">
                    {dayjs(date).format("dddd")}  
                  </span>
                  <span className="font-medium text-xs text-neutral-3 group-focus:text-neutral-1 group-hover:text-neutral-1">
                    {dayjs(date).format("DD/MM/YYYY")}  
                  </span>
                </button>
                <div className="w-[1px] h-6 bg-[#D0D0D0] last:hidden">&nbsp;</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
  
export default PilihPenerbangan;