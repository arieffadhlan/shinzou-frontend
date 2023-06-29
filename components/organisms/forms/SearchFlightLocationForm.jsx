"use client"

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAirport from "@/hooks/useAirport";
import { setSearchFlight } from "@/redux/features/flight/flightSlice";

const SearchFlightLocationForm = () => {
  const dispatch = useDispatch();
  const { searchFlightData } = useSelector((state) => state.flight);
  const [locationSwap, setLocationSwap] = useState(false);
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    const fetchAirports = async () => {
      const airports = await useAirport();
      setAirports(airports);
    }

    fetchAirports();
  }, []);

  const swapLocationHandler = () => {
    setLocationSwap(!locationSwap);
  }

  const handleSelectLocationFrom = (event) => {
    dispatch(setSearchFlight({
			...searchFlightData,
			location_from: event.target.value
		}));

    console.log(searchFlightData);
  }
  
  const handleSelectLocationTo = (event) => {
    dispatch(setSearchFlight({
      ...searchFlightData,
			location_to: event.target.value
		}));
    console.log(searchFlightData);
  }

  return (
    <div className="flex flex-col items-center gap-0 p-2.5 border border-neutral-2 rounded-[10px] xs:px-4 2md:flex-row 2md:gap-9 2md:p-0 2md:border-0"> 
      {/* Location from */}
      <div className={`flex items-center gap-5 w-full xs:gap-7 ${locationSwap ? "order-3" : "order-1"}`}>
        <div className="flex items-center gap-3 text-neutral-3">
          <span className="material-icons-round">flight_takeoff</span>
          <span className="text-xs xs:text-sm">{locationSwap ? "To" : "From"}</span>
        </div>
        <div className="flex flex-col items-start gap-3 w-full">
          <select 
            onChange={handleSelectLocationFrom}
            defaultValue={airports[0]?.location} 
            name="location_from" 
            className="select-location"
          >
            {airports.map((airport, index) => (
              <option key={index} value={airport.location}>
                {airport.location} ({airport.location_acronym})
              </option>
            ))}
          </select>
          <div className="hidden w-full h-[1px] bg-neutral-2 2md:block"></div>
        </div>
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
        <div className="flex flex-col items-start gap-3 w-full">
          <select 
            onChange={handleSelectLocationTo}
            defaultValue={airports[1]?.location} 
            name="location_to" 
            className="select-location"
          >
            {airports.map((airport, index) => (
              <option key={index} value={airport.location}>
                {airport.location} ({airport.location_acronym})
              </option>
            ))}
          </select>
          <div className="hidden w-full h-[1px] bg-neutral-2 2md:block"></div>
        </div>
      </div>
    </div>
  )
}

export default SearchFlightLocationForm;