"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { searchFlight } from "@/redux/features/flight/flightAction";
import useQueryParams from "@/hooks/useQueryParams";

import Container from "./Container";
import Button from "../atoms/Button";
import SearchFlightClassForm from "../organisms/forms/SearchFlightClassForm";
import SearchFlightDateForm from "../organisms/forms/SearchFlightDateForm";
import SearchFlightLocationForm from "../organisms/forms/SearchFlightLocationForm";
import SearchFlightPassengersForm from "../organisms/forms/SearchFlightPassengersForm";
import SearchFlightSetReturn from "../organisms/forms/SearchFlightSetReturn";

const SearchFlightForm = ({ setShowSearchForm = function(){}, className = "" }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { selectedDepartureFlight, searchFlightData, isReturn, loading } = useSelector((state) => state.flight);
  const { adult, child, baby } = searchFlightData.passengers;
  let searchParams = useQueryParams({
    ...searchFlightData,
    return_date: isReturn ? searchFlightData.return_date : null,
    passengers: adult + child + baby
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();    

    if (!isReturn) {
      searchParams = searchParams.split("return_date").join("");
    }
    
    if (isReturn && selectedDepartureFlight.hasOwnProperty("id")) {
      searchParams = searchParams.concat(`&return_date=${searchFlightData.return_date}`);

      dispatch(searchFlight({
        ...searchFlightData,
        location_from: searchFlightData.location_to, 
        location_to: searchFlightData.location_from, 
        departure_date: searchFlightData.return_date, 
        passengers: searchFlightData.passengers, 
        seat_class: searchFlightData.seat_class 
      }));
    } else {
      dispatch(searchFlight(searchFlightData));
    }
    
    router.push(`/flights/search?${searchParams}`);
    setShowSearchForm(false);
  }

  return (
    <Container className={twMerge("mt-32", className)}>
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-8 border border-neutral-2 rounded-xl bg-neutral-1 shadow-xs">
        <div className="flex flex-col gap-6 px-6 pt-6">
          <h1 className="font-bold text-xl">
            Choose a special Flight Schedule on&nbsp;
            <span className="text-primary-4">Shinzou!</span>
          </h1>
          <div className="flex flex-col gap-4 2lg:gap-9">
            <SearchFlightLocationForm />
            <div className="flex flex-col gap-3">
              <SearchFlightSetReturn />
              <div className="grid grid-rows-2 grid-cols-2 place-items-center gap-7 2lg:grid-rows-1 2lg:grid-cols-4">
                <SearchFlightDateForm type="departure" />
                <SearchFlightDateForm type="return" />
                <SearchFlightPassengersForm />
                <SearchFlightClassForm />
              </div>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          size="lg"
          variant="primary"
          className="rounded-t-none rounded-b-xl"
          loading={loading}
        >
          Search Flights
        </Button>
      </form>
    </Container>
  );
}

export default SearchFlightForm;
