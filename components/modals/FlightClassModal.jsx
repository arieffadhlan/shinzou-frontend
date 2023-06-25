"use client"

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchFlight } from "@/redux/features/flight/flightSlice";

const FlightClassModal = ({ data }) => {
	const dispatch = useDispatch();
	const [selected, setSelected] = useState(data.class);

	const handleSelected = (value) => {
		setSelected(value);
		dispatch(setSearchFlight({
			...data,
			class: value
		}));
	}
	
	return (
		<div className="flex flex-col px-2 mb-3.5">
			<button type="button" onClick={() => handleSelected("Economy")} className={`group flex flex-col gap-2 px-4 pt-2 outline-none ${selected === "Economy" ? "bg-primary-5" : "bg-white"}`}>
				<div className="flex justify-between items-center w-full">
					<div className="flex flex-col items-start gap-1">
						<span className={`text-sm ${selected === "Economy" ? "font-bold text-neutral-1" : "font-medium text-neutral-5"}`}>
							Economy
						</span>
						<span className={`font-medium text-sm ${selected === "Economy" ? "text-neutral-1": "text-primary-4"}`}>
							IDR 4.950.000
						</span>
					</div>
					<span className={`material-icons-round text-success ${selected === "Economy" ? "!inline-block" : "!hidden"}`}>check_circle</span>
				</div>
				<div className="w-full h-[1px] bg-neutral-2"></div>
			</button>
			<button type="button" onClick={() => handleSelected("Premium Economy")} className={`group flex flex-col gap-2 px-4 pt-2 outline-none ${selected === "Premium Economy" ? "bg-primary-5" : "bg-white"}`}>
				<div className="flex justify-between items-center w-full">
					<div className="flex flex-col items-start gap-1">
						<span className={`text-sm ${selected === "Premium Economy" ? "font-bold text-neutral-1" : "font-medium text-neutral-5"}`}>
							Premium Economy
						</span>
						<span className={`font-medium text-sm ${selected === "Premium Economy" ? "text-neutral-1": "text-primary-4"}`}>
							IDR 7.550.000
						</span>
					</div>
					<span className={`material-icons-round text-success ${selected === "Premium Economy" ? "!inline-block" : "!hidden"}`}>check_circle</span>
				</div>
				<div className="w-full h-[1px] bg-neutral-2"></div>
			</button>
			<button type="button" onClick={() => handleSelected("Business")} className={`group flex flex-col gap-2 px-4 pt-2 outline-none ${selected === "Business" ? "bg-primary-5" : "bg-white"}`}>
				<div className="flex justify-between items-center w-full">
					<div className="flex flex-col items-start gap-1">
						<span className={`text-sm ${selected === "Business" ? "font-bold text-neutral-1" : "font-medium text-neutral-5"}`}>
							Business
						</span>
						<span className={`font-medium text-sm ${selected === "Business" ? "text-neutral-1": "text-primary-4"}`}>
							IDR 29.220.000
						</span>
					</div>
					<span className={`material-icons-round text-success ${selected === "Business" ? "!inline-block" : "!hidden"}`}>check_circle</span>
				</div>
				<div className="w-full h-[1px] bg-neutral-2"></div>
			</button>
			<button type="button" onClick={() => handleSelected("First Class")} className={`group flex flex-col gap-2 px-4 pt-2 outline-none ${selected === "First Class" ? "bg-primary-5" : "bg-white"}`}>
				<div className="flex justify-between items-center w-full">
					<div className="flex flex-col items-start gap-1">
						<span className={`text-sm ${selected === "First Class" ? "font-bold text-neutral-1" : "font-medium text-neutral-5"}`}>
							First Class
						</span>
						<span className={`font-medium text-sm ${selected === "First Class" ? "text-neutral-1": "text-primary-4"}`}>
							IDR 87.620.000
						</span>
					</div>
					<span className={`material-icons-round text-success ${selected === "First Class" ? "!inline-block" : "!hidden"}`}>check_circle</span>
				</div>
				<div className="w-full h-[1px] bg-neutral-2"></div>
			</button>
		</div>
	);
}

export default FlightClassModal;