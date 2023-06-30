"use client"

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchFlight } from "@/redux/features/flight/flightSlice";

const FlightClassModal = ({ data }) => {
	const dispatch = useDispatch();
	const [selected, setSelected] = useState(data.seat_class);
	const seatClasses = ["Economy", "Premium Economy", "Business", "First Class"];

	const handleSelected = (value) => {
		setSelected(value);
		dispatch(setSearchFlight({
			...data,
			seat_class: value
		}));
	}
	
	return (
		<div className="flex flex-col px-2 mb-3.5">
			{seatClasses.map((seatClass, index) => (				
				<button 
					type="button"
					key={index} 
					onClick={() => handleSelected(seatClass)} 
					className={`
						${selected === seatClass 
							? "bg-primary-5 border-transparent" 
							: "bg-white border-neutral-2"
						} group flex flex-col gap-2 px-4 py-3 border-b outline-none`
				}>
					<div className="flex justify-between items-center w-full">
						<span className={
							`${selected === seatClass 
								? "text-neutral-1" 
								: "text-neutral-5"
							} font-medium text-sm`
						}>
							{seatClass}
						</span>
						<span className={
							`${selected === seatClass 
								? "!inline-block" 
								: "!hidden"
							} material-icons-round !text-[20px] text-success`
						}>
							check_circle
						</span>
					</div>
				</button>
			))}
		</div>
	);
}

export default FlightClassModal;