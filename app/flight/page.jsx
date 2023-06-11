import Image from "next/image";

import Navbar from "@/components/layouts/Navbar"
import PilihPenerbangan from "@/components/PilihPenerbangan"

import boxIcon from "@/assets/icons/box.svg";
import chevronRightIcon from "@/assets/icons/chevron-right.svg";
import dollarSignIcon from "@/assets/icons/dollar-sign.svg";
import filterIcon from "@/assets/icons/filter.svg";
import heartIcon from "@/assets/icons/heart.svg";

const Flight = () => {
  return (
    <>
      <Navbar></Navbar>
      <PilihPenerbangan></PilihPenerbangan>
      <section className="flex justify-end pl-[260px] pr-[212px] mt-6">
        <button type="button" className="flex items-center gap-2 px-3 py-1.5 border border-primary-4 rounded-2xl font-medium text-xs leading-[18px] text-primary-4">
          <Image src={filterIcon} alt="Filter"/>
          Termurah
        </button>
      </section>
      <section className="flex gap-7 pl-[260px] pr-[212px] mt-6">
        <div className="flex flex-col gap-6 w-[268px] p-6 rounded-2xl shadow-xs">
          <h2 className="font-medium text-base text-black">Filter</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-4 border-b border-[#D0D0D0]">
              <Image src={boxIcon} alt="Transit" />
              <span className="w-[156px] text-base text-[#151515]">Transit</span>
              <Image src={chevronRightIcon} alt="Chevron Right" />
            </div>
            <div className="flex items-center gap-2 pb-4 border-b border-[#D0D0D0]">
              <Image src={heartIcon} alt="Fasilitas" />
              <span className="w-[156px] text-base text-[#151515]">Fasilitas</span>
              <Image src={chevronRightIcon} alt="Chevron Right" />
            </div>
            <div className="flex items-center gap-2">
              <Image src={dollarSignIcon} alt="Harga" />
              <span className="w-[156px] text-base text-[#151515]">Harga</span>
              <Image src={chevronRightIcon} alt="Chevron Right" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Flight;