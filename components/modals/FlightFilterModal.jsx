"use client"

import Button from "../Button";

const FlightFilterModal = () => {
	return (
		<>
			<div id="flight-filter" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center">
				<div className="flex flex-col w-[400px] rounded-2xl bg-neutral-1 shadow-xs z-10">
					<div className="flex justify-end px-4 pt-4 pb-3.5 border-b border-neutral-2">
						<span data-modal-hide="flight-filter" className="material-icons-round cursor-pointer text-neutral-5">close</span>
					</div>
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
					<div className="flex justify-end px-4 pb-4">
						<Button
							type="submit"
							size="lg"
							variant="primary"
							className="px-11 bg-primary-5"
						>
							Pilih
						</Button>
					</div>
				</div>
				<div data-modal-hide="flight-filter" className="fixed inset-0 opacity-[60%] bg-black"></div>
			</div>
		</>
	);
}

export default FlightFilterModal;