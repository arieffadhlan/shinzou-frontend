"use client";

import { useState } from "react";

import Button from "../Button";

const FlightSeatModal = () => {
  const [adultPassenger, setAdultPassanger] = useState(0);
  const [childPassenger, setChildPassanger] = useState(0);
  const [babyPassenger, setBabyPassanger] = useState(0);
  
	return (
		<>
			<div id="flight-seat" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center">
				<div className="flex flex-col gap-4 w-[400px] rounded-2xl bg-neutral-1 shadow-xs z-10">
					<div className="flex justify-end px-4 pt-4 pb-3.5 border-b border-neutral-2">
						<span data-modal-hide="flight-seat" className="material-icons-round cursor-pointer text-neutral-5">close</span>
					</div>
					<div className="flex flex-col px-4">
            <div className="flex justify-between items-center gap-1 pb-2 border-b border-neutral-2">
              <div className="flex gap-2">
                <span className="material-icons-round !text-[20px] text-neutral-4 xs:!text-[24px]">man</span>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-sm text-neutral-5">Dewasa</span>
                  <span className="text-xs text-neutral-3">(12 tahun keatas)</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => adultPassenger !== 0 ? setAdultPassanger(adultPassenger-1) : adultPassenger} 
                  className="material-icons-round flex justify-center items-center h-10 p-2 outline-none border border-primary-4 rounded text-neutral-2 hocus:text-primary-4"
                >
                  remove
                </button>
                <div className="flex justify-center items-center w-10 h-10 p-2 border border-neutral-2 rounded font-medium text-sm text-neutral-5 2xs:w-[60px]">
                  {adultPassenger}
                </div>
                <button 
                  onClick={() => setAdultPassanger(adultPassenger+1)} 
                  className="material-icons-round flex justify-center items-center h-10 p-2 outline-none border border-primary-4 rounded text-neutral-2 hocus:text-primary-4"
                >
                  add
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center gap-1 py-2 border-b border-neutral-2">
              <div className="flex gap-2">
                <span className="material-icons-round !text-[20px] text-neutral-4 xs:!text-[24px]">girl</span>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-sm text-neutral-5">Anak</span>
                  <span className="text-xs text-neutral-3">(2 - 11 tahun)</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => childPassenger !== 0 ? setChildPassanger(childPassenger-1) : childPassenger} 
                  className="material-icons-round flex justify-center items-center h-10 p-2 outline-none border border-primary-4 rounded text-neutral-2 hocus:text-primary-4"
                >
                  remove
                </button>
                <div className="flex justify-center items-center w-10 h-10 p-2 border border-neutral-2 rounded font-medium text-sm text-neutral-5 2xs:w-[60px]">
                  {childPassenger}
                </div>
                <button 
                  onClick={() => setChildPassanger(childPassenger+1)} 
                  className="material-icons-round flex justify-center items-center h-10 p-2 outline-none border border-primary-4 rounded text-neutral-2 hocus:text-primary-4"
                >
                  add
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center gap-1 py-2 border-b border-neutral-2">
              <div className="flex gap-2">
                <span className="material-icons-round !text-[20px] text-neutral-4 xs:!text-[24px]">boy</span>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-sm text-neutral-5">Bayi</span>
                  <span className="text-xs text-neutral-3">(Dibawah 2 tahun)</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => babyPassenger !== 0 ? setBabyPassanger(babyPassenger-1) : babyPassenger} 
                  className="material-icons-round flex justify-center items-center h-10 p-2 outline-none border border-primary-4 rounded text-neutral-2 hocus:text-primary-4"
                >
                  remove
                </button>
                <div className="flex justify-center items-center w-10 h-10 p-2 border border-neutral-2 rounded font-medium text-sm text-neutral-5 2xs:w-[60px]">
                  {babyPassenger}
                </div>
                <button 
                  onClick={() => setBabyPassanger(babyPassenger+1)} 
                  className="material-icons-round flex justify-center items-center h-10 p-2 outline-none border border-primary-4 rounded text-neutral-2 hocus:text-primary-4"
                >
                  add
                </button>
              </div>
            </div>
					</div>
					<div className="flex justify-end px-4 pb-4">
						<Button
							type="submit"
							size="lg"
							variant="primary"
							className="px-11 bg-primary-5"
						>
							Simpan
						</Button>
					</div>
				</div>
				<div data-modal-hide="flight-seat" className="fixed inset-0 opacity-[60%] bg-black"></div>
			</div>
		</>
	);
}

export default FlightSeatModal;