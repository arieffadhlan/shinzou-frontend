"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

import useQueryParams from "@/hooks/useQueryParams";
import { setSearchFlight } from "@/redux/features/flight/flightSlice";
import { searchFlight } from "@/redux/features/flight/flightAction";

import Container from "./Container";
import Button from "../atoms/Button";
import SearchFlightClassForm from "../organisms/forms/SearchFlightClassForm";
import SearchFlightDateForm from "../organisms/forms/SearchFlightDateForm";
import SearchFlightLocationForm from "../organisms/forms/SearchFlightLocationForm";
import SearchFlightPassengersForm from "../organisms/forms/SearchFlightPassengersForm";

const SearchFlightForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { searchFlightData, success } = useSelector((state) => state.flight);
  const [returnFlight, setReturnFlight] = useState(false);
  const searchParams = useQueryParams(searchFlightData);

  useEffect(() => {
    if (success) {
      router.push(`/flights/search?${searchParams}`)
    }
  }, [success]);
  
  const returnFlightHandler = () => {
    if (!returnFlight) {
      dispatch(setSearchFlight({
        ...searchFlightData,
        return_date: dayjs(new Date()).format("YYYY-MM-DD"),
      }));
    }
    setReturnFlight(!returnFlight);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();    
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
          <SearchFlightLocationForm />
          <div className="flex flex-col gap-3">
            {/* Set return flight */}
            <div className="flex justify-between items-center gap-0 2lg:justify-end 2lg:gap-4">
              <span className="font-medium text-sm text-black xs:text-base">Pulang-Pergi?</span>
              <div className="relative flex justify-center">
                <label htmlFor="return" className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" id="return" onChange={returnFlightHandler} className="sr-only peer" readOnly />
                  <div className="checkbox-toggle"></div>
                </label>
              </div>
            </div>
            <div className="grid grid-rows-2 grid-cols-2 place-items-center gap-7 2lg:grid-rows-1 2lg:grid-cols-4">
              <SearchFlightDateForm type="departure" />
              <SearchFlightDateForm type="return" returnFlight={returnFlight} />
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
        className="rounded-t-none rounded-b-xl font-bold"
      >
        Cari Penerbangan
      </Button>
    </form>
  </Container>
  )
}

export default SearchFlightForm;
