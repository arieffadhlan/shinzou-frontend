import OrderHistoryDetails from "./OrderHistoryDetails"

const OrderHistoryCard = () => {	
	return (
		<div className="cursor-pointer flex flex-[60%] flex-col gap-4 h-fit p-4 border-2 border-transparent rounded-lg bg-white shadow-2xs hocus:border-primary-4/50">
			{/* Flight information */}
			<div className="flex flex-col gap-3">
				<div className="flex items-center gap-4 w-full">
					{/* Location from */}
					<div className="flex gap-2">
						<span className="material-icons-round !hidden !text-[20px] text-neutral-3 xs:!inline-block">place</span>
						<div className="flex flex-col">
							<span className="font-bold text-sm text-neutral-5">Jakarta</span>
							<span className="font-medium text-xs text-neutral-5">5 Maret 2023</span>
							<span className="font-medium text-xs text-neutral-5">19:10</span>
						</div>
					</div>
					{/* Duration */}
					<div className="flex flex-2 flex-col justify-center items-center">
						<span className="font-medium text-xs text-neutral-3">4h 0m</span>
						<div className="flex items-center w-full">
							<div className="w-full h-[1px] bg-[#8A8A8A] mt-[0.5px]"></div>
							<span className="material-icons-round -ml-[5px] !font-bold !text-[8px] text-neutral-3">arrow_forward_ios</span>
						</div>
					</div>
					{/* Location to */}
					<div className="flex gap-2">
						<span className="material-icons-round !hidden !text-[20px] text-neutral-3 xs:!inline-block">place</span>
						<div className="flex flex-col">
							<span className="font-bold text-sm text-neutral-5">Melbourne</span>
							<span className="font-medium text-xs text-neutral-5">5 Maret 2023</span>
							<span className="font-medium text-xs text-neutral-5">21:10</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between items-center gap-2.5 pt-3 border-t border-neutral-2 xs:flex-row xs:gap-0">
					<div className="flex justify-between items-center w-full">
						{/* Booking code */}
						<div className="flex flex-col">
							<span className="font-bold text-sm text-neutral-5">Booking Code:</span>
							<span className="text-sm text-neutral-5">6723y2GHK</span>
						</div>
						{/* Class */}
						<div className="flex flex-col">
							<span className="font-bold text-sm text-neutral-5">Class:</span>
							<span className="text-sm text-neutral-5">Economy</span>
						</div>
					</div>
					{/* Price */}
					<div className="flex w-full justify-end xs:w-[76%]">
						<span className="font-bold text-sm text-primary-5">IDR 9.850.000</span>
					</div>
				</div>
			</div>
			{/* Flight details */}
			<OrderHistoryDetails className="2md:hidden" />
		</div>
	)
}

export default OrderHistoryCard