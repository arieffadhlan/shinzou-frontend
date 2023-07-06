"use client";

import { useDispatch, useSelector } from 'react-redux';
import { setSearchFlight } from '@/redux/features/flight/flightSlice';

const SearchFlightDateForm = ({ type }) => {
  const dispatch = useDispatch();
  const { searchFlightData, isReturn } = useSelector((state) => state.flight);

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
  
  return type === "departure" ? (
    // Departure Date
    <div className="flex items-center gap-7 w-full">
      <div className="hidden items-center gap-3 text-neutral-3 2lg:flex">
        <span className="material-icons-round">calendar_month</span>
        <span className="text-sm">Waktu</span>
      </div>
      <div className="relative flex flex-col items-start gap-2 w-full outline-none">
        <span className="font-medium text-sm text-neutral-3 xs:text-base">Kepergian</span>
        <input 
          type="date"
          onChange={handleDepartureDate}
          value={searchFlightData.departure_date}
          className="datepicker"
        />
        <div className="w-full h-[1px] bg-neutral-2"></div>
      </div>
    </div>
  ) : (
    // Return Date
    <div className="relative flex flex-col items-start gap-2 w-full outline-none" disabled={!isReturn}>
      <span className="font-medium text-sm text-neutral-3 xs:text-base">Kepulangan</span>
      <input 
        type={isReturn ? "date" : "text"}
        onChange={handleReturnDate}
        value={isReturn ? searchFlightData.return_date : ""}
        className="datepicker"
        placeholder="Select Date"
        disabled={!isReturn}
      />
      <div className="w-full h-[1px] bg-neutral-2"></div>
  </div>
  );
}

export default SearchFlightDateForm;