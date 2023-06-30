"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import useQueryParams from "@/hooks/useQueryParams";
import { searchFlight } from "@/redux/features/flight/flightAction";

import Container from "./Container";
import Button from "../atoms/Button";
import SearchFlightClassForm from "../organisms/forms/SearchFlightClassForm";
import SearchFlightDateForm from "../organisms/forms/SearchFlightDateForm";
import SearchFlightLocationForm from "../organisms/forms/SearchFlightLocationForm";
import SearchFlightPassengersForm from "../organisms/forms/SearchFlightPassengersForm";
import SearchFlightSetReturn from "../organisms/forms/SearchFlightSetReturn";

const SearchFlightForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { searchFlightData, isReturn, loading } = useSelector((state) => state.flight);
  const { adult, child, baby } = searchFlightData.passengers;
  const searchParams = useQueryParams({
    ...searchFlightData,
    return_date: isReturn ? searchFlightData.return_date : null,
    passengers: adult + child + baby
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();    
    dispatch(searchFlight(searchFlightData));
    router.push(`/flights/search?${searchParams}`);
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
        className="rounded-t-none rounded-b-xl font-bold"
        loading={loading}
      >
        Cari Penerbangan
      </Button>
    </form>
  </Container>
  )
}

export default SearchFlightForm;
