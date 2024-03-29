"use client";

import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { setIsReturnFlight, setSearchFlight } from "@/redux/features/flight/flightSlice";

const SearchFlightSetReturn = () => {
  const dispatch = useDispatch();
  const { searchFlightData, isReturn } = useSelector((state) => state.flight);
  
  const returnFlightHandler = () => {
    if (!isReturn) {
      dispatch(setSearchFlight({
        ...searchFlightData,
        return_date: dayjs(new Date()).format("YYYY-MM-DD"),
      }));
    }

    dispatch(setIsReturnFlight(!isReturn));
  }
  
  return (
    <div className="flex justify-between items-center gap-0 2lg:justify-end 2lg:gap-4">
      <span className="font-medium text-sm text-black xs:text-base">Pulang-Pergi?</span>
      <div className="relative flex justify-center">
        <label htmlFor="return" className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" onChange={returnFlightHandler} checked={isReturn} id="return" className="sr-only peer" readOnly />
          <div className="checkbox-toggle"></div>
        </label>
      </div>
    </div>
  );
}

export default SearchFlightSetReturn;