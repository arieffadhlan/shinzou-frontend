"use client"

import { useState } from "react";

const SearchFlightLocationForm = () => {
  const [locationSwap, setLocationSwap] = useState(false);

  const swapLocationHandler = () => {
    setLocationSwap(!locationSwap);
  }

  return (
    <div className="flex flex-col items-center gap-0 p-2.5 border border-neutral-2 rounded-[10px] xs:px-4 2md:flex-row 2md:gap-9 2md:p-0 2md:border-0"> 
      {/* Location from */}
      <div className={`flex items-center gap-5 w-full xs:gap-7 ${locationSwap ? "order-3" : "order-1"}`}>
        <div className="flex items-center gap-3 text-neutral-3">
          <span className="material-icons-round">flight_takeoff</span>
          <span className="text-xs xs:text-sm">{locationSwap ? "To" : "From"}</span>
        </div>
        <button type="button" className="flex flex-col items-start gap-3 w-full outline-none">
          <span className="font-medium text-sm text-black xs:text-lg">Jakarta (JKTA)</span>
          <div className="hidden w-full h-[1px] bg-neutral-2 2md:block"></div>
        </button>
      </div>
      {/* Swap location */}
      <div className="flex justify-center items-center gap-3 order-2 w-full 2md:w-auto">
        <div className="block w-full h-[1px] bg-neutral-2 2md:hidden"></div>
        <button type="button" onClick={swapLocationHandler} className="flex justify-center items-center p-1 border border-primary-4 outline-none rounded-xl bg-black rotate-90 2md:rotate-0">
          <span className="material-icons-round !text-[20px] text-white xs:!text-[24px]">swap_horiz</span>
        </button>
      </div>
      {/* Location to */}
      <div className={`flex items-center gap-5 w-full xs:gap-7 ${locationSwap ? "order-1" : "order-3"}`}>
        <div className="flex items-center gap-3 text-neutral-3">
          <span className="material-icons-round">flight_takeoff</span>
          <span className="text-xs xs:text-sm">{locationSwap ? "From" : "To"}</span>
        </div>
        <button type="button" className="flex flex-col items-start gap-3 w-full outline-none">
          <span className="font-medium text-sm text-black xs:text-lg">Melbourne (MLB)</span>
          <div className="hidden w-full h-[1px] bg-neutral-2 2md:block"></div>
        </button>
      </div>
    </div>
  )
}

export default SearchFlightLocationForm;