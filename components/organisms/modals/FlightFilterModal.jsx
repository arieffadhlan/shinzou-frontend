"use client"

import Button from "../../atoms/Button";

const FlightFilterModal = () => {
	return (
		<>
			<div className="flex flex-col mb-3.5">
				<button type="button" className="group flex flex-col gap-2 px-6 pt-3 outline-none bg-white hover:bg-primary-5">
					<div className="flex justify-between items-center w-full pb-3 border-b border-neutral-2">
						<span className="font-medium text-sm text-neutral-5 group-hover:font-bold group-hover:text-neutral-1">
							Economy&nbsp; <span className="font-medium group-hover:font-bold">- Termurah</span>
						</span>
						<span className="material-icons-round !hidden !text-[20px] text-success group-hover:!inline-block">check_circle</span>
					</div>
				</button>
				<button type="button" className="group flex flex-col gap-2 px-6 pt-3 outline-none bg-white hover:bg-primary-5">
					<div className="flex justify-between items-center w-full pb-3 border-b border-neutral-2">
						<span className="font-medium text-sm text-neutral-5 group-hover:font-bold group-hover:text-neutral-1">
							Premium&nbsp; <span className="font-medium group-hover:font-bold">- Termurah</span>
						</span>
						<span className="material-icons-round !hidden !text-[20px] text-success group-hover:!inline-block">check_circle</span>
					</div>
				</button>
				<button type="button" className="group flex flex-col gap-2 px-6 pt-3 outline-none bg-white hover:bg-primary-5">
					<div className="flex justify-between items-center w-full pb-3 border-b border-neutral-2">
						<span className="font-medium text-sm text-neutral-5 group-hover:font-bold group-hover:text-neutral-1">
							Business&nbsp; <span className="font-medium group-hover:font-bold">- Termurah</span>
						</span>
						<span className="material-icons-round !hidden !text-[20px] text-success group-hover:!inline-block">check_circle</span>
					</div>
				</button>
				<button type="button" className="group flex flex-col gap-2 px-6 pt-3 outline-none bg-white hover:bg-primary-5">
					<div className="flex justify-between items-center w-full pb-3 border-b border-neutral-2">
						<span className="font-medium text-sm text-neutral-5 group-hover:font-bold group-hover:text-neutral-1">
							First&nbsp; <span className="font-medium group-hover:font-bold">- Termurah</span>
						</span>
						<span className="material-icons-round !hidden !text-[20px] text-success group-hover:!inline-block">check_circle</span>
					</div>
				</button>
			</div>
		</>
	);
}

export default FlightFilterModal;