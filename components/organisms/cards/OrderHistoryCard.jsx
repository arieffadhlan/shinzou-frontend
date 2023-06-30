import dayjs from "dayjs";
import 'dayjs/locale/id'
import getTimeDifference from "@/helpers/getTimeDifference";
import OrderHistoryDetails from "./OrderHistoryDetails"
import { twMerge } from "tailwind-merge";

// Set local language
dayjs.locale("id")

const OrderHistoryCard = ({ data, orderId, setOrderId, className = "" }) => {	
	const { departureFlight } = data;
	const { originAirport, destinationAirport } = departureFlight;

	const departureTime = dayjs(new Date(`${departureFlight.departure_date} ${departureFlight.departure_time}`));
  const arrivalTime = dayjs(new Date(`${departureFlight.arrival_date} ${departureFlight.arrival_time}`));
  const timeDifference = getTimeDifference(departureTime, arrivalTime);
	
	const handleOnClick = () => {
		setOrderId(`order-${orderId}`);
	}
	
	return (
		<div onClick={handleOnClick} id={`order-${orderId}`} className={twMerge("cursor-pointer flex flex-col gap-4 h-fit p-4 border-2 rounded-lg bg-white shadow-2xs", className)}>
			{/* Flight information */}
			<div className="flex flex-col gap-3">
				<div className="flex items-center gap-4 w-full">
					{/* Location from */}
					<div className="flex gap-2">
						<span className="material-icons-round !hidden !text-[20px] text-neutral-3 xs:!inline-block">place</span>
						<div className="flex flex-col">
							<span className="font-bold text-sm text-neutral-5">
								{originAirport.location}
							</span>
							<span className="font-medium text-xs text-neutral-5">
								{departureTime.format("D MMM YYYY")}
							</span>
							<span className="font-medium text-xs text-neutral-5">
								{departureTime.format("HH:mm")}
							</span>
						</div>
					</div>
					{/* Duration */}
					<div className="flex flex-2 flex-col justify-center items-center">
						<span className="font-medium text-xs text-neutral-3">
							{timeDifference.hourDifference}h {timeDifference.minuteDifference}m
						</span>
						<div className="flex items-center w-full">
							<div className="w-full h-[1px] bg-[#8A8A8A] mt-[0.5px]"></div>
							<span className="material-icons-round -ml-[5px] !font-bold !text-[8px] text-neutral-3">
								arrow_forward_ios
							</span>
						</div>
					</div>
					{/* Location to */}
					<div className="flex gap-2">
						<span className="material-icons-round !hidden !text-[20px] text-neutral-3 xs:!inline-block">place</span>
						<div className="flex flex-col">
							<span className="font-bold text-sm text-neutral-5">
								{destinationAirport.location}
							</span>
							<span className="font-medium text-xs text-neutral-5">
								{arrivalTime.format("D MMM YYYY")}
							</span>
							<span className="font-medium text-xs text-neutral-5">
								{arrivalTime.format("HH:mm")}
							</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between items-center gap-2.5 pt-3 border-t border-neutral-2 sm:flex-row sm:gap-0">
					<div className="flex justify-between items-center w-full">
						{/* Booking code */}
						<div className="flex flex-col">
							<span className="font-bold text-sm text-neutral-5">Booking Code:</span>
							<span className="text-sm text-neutral-5">{data.booking_code}</span>
						</div>
						{/* Class */}
						<div className="flex flex-col">
							<span className="font-bold text-sm text-neutral-5">Class:</span>
							<span className="text-sm text-neutral-5">{departureFlight.class}</span>
						</div>
					</div>
					{/* Price */}
					<div className="flex w-full justify-end sm:w-[76%] 2md:w-[48%]">
						<span className="font-bold text-sm text-primary-5">
							IDR {data.ammount.toLocaleString("id-ID")}
						</span>
					</div>
				</div>
			</div>
			{/* Flight details */}
			<OrderHistoryDetails className="2md:hidden" />
		</div>
	)
}

export default OrderHistoryCard