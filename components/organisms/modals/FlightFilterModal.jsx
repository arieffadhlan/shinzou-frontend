"use client"

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { setFlights } from "@/redux/features/flight/flightSlice";
import { closeModal } from "@/redux/features/modal/modalSlice";

const FlightFilterModal = ({ data }) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const flights = [...data];

	console.log("render")
	
	const handleFilterByLowestPrice = () => {
		const result = flights.sort((x, y) => x.price - y.price);
		
		dispatch(setFlights(result));
		dispatch(closeModal());

		router.refresh();
	}

	const handleFilterByDeparture = (filter) => {
		let result = [];
		
		if (filter === "earliest") {
			result = flights.sort((x, y) => (new Date(`${x.departure_date} ${x.departure_time}`)) - (new Date(`${y.departure_date} ${y.departure_time}`)));
		} else {
			result = flights.sort((x, y) => (new Date(`${y.departure_date} ${y.departure_time}`)) - (new Date(`${x.departure_date} ${x.departure_time}`)));
		}
		
		dispatch(setFlights(result));
		dispatch(closeModal());

		router.refresh();
	}

	const handleFilterByArrival = (filter) => {
		let result = [];

		if (filter === "earliest") {
			result = flights.sort((x, y) => (new Date(`${x.arrival_date} ${x.arrival_time}`)) - (new Date(`${y.arrival_date} ${y.arrival_time}`)));
		} else {
			result = flights.sort((x, y) => (new Date(`${y.arrival_date} ${y.arrival_time}`)) - (new Date(`${x.arrival_date} ${x.arrival_time}`)));
		}
		
		dispatch(setFlights(result));
		dispatch(closeModal());
		
		router.refresh();
	}

	return (
		<>
			<div className="flex flex-col mb-3.5">
				<button type="button" onClick={handleFilterByLowestPrice} className="group flex flex-col gap-2 px-6 pt-3 outline-none bg-white hover:bg-primary-5">
					<div className="flex justify-between items-center w-full pb-3 border-b border-neutral-2">
						<span className="font-medium text-sm text-neutral-5 group-hover:font-bold group-hover:text-neutral-1">
							Harga&nbsp; <span className="font-medium group-hover:font-bold">- Termurah</span>
						</span>
					</div>
				</button>
				<button type="button" onClick={() => handleFilterByDeparture("earliest")} className="group flex flex-col gap-2 px-6 pt-3 outline-none bg-white hover:bg-primary-5">
					<div className="flex justify-between items-center w-full pb-3 border-b border-neutral-2">
						<span className="font-medium text-sm text-neutral-5 group-hover:font-bold group-hover:text-neutral-1">
							Keberangkatan&nbsp; <span className="font-medium group-hover:font-bold">- Paling Awal</span>
						</span>
					</div>
				</button>
				<button type="button" onClick={() => handleFilterByDeparture("latest")} className="group flex flex-col gap-2 px-6 pt-3 outline-none bg-white hover:bg-primary-5">
					<div className="flex justify-between items-center w-full pb-3 border-b border-neutral-2">
						<span className="font-medium text-sm text-neutral-5 group-hover:font-bold group-hover:text-neutral-1">
							Keberangkatan&nbsp; <span className="font-medium group-hover:font-bold">- Paling Akhir</span>
						</span>
					</div>
				</button>
				<button type="button" onClick={() => handleFilterByArrival("earliest")} className="group flex flex-col gap-2 px-6 pt-3 outline-none bg-white hover:bg-primary-5">
					<div className="flex justify-between items-center w-full pb-3 border-b border-neutral-2">
						<span className="font-medium text-sm text-neutral-5 group-hover:font-bold group-hover:text-neutral-1">
							Kedatangan&nbsp; <span className="font-medium group-hover:font-bold">- Paling Awal</span>
						</span>
					</div>
				</button>
				<button type="button" onClick={() => handleFilterByArrival("latest")} className="group flex flex-col gap-2 px-6 pt-3 outline-none bg-white hover:bg-primary-5">
					<div className="flex justify-between items-center w-full pb-3">
						<span className="font-medium text-sm text-neutral-5 group-hover:font-bold group-hover:text-neutral-1">
							Kedatangan&nbsp; <span className="font-medium group-hover:font-bold">- Paling Akhir</span>
						</span>
					</div>
				</button>
			</div>
		</>
	);
}

export default FlightFilterModal;