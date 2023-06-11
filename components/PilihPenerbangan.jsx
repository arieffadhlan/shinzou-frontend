import Image from "next/image";

import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";

import arrowLeftIcon from "@/assets/icons/arrow-left.svg";

function PilihPenerbangan() {
    return (
      <section className="flex flex-col gap-6 pt-[132px] pl-[260px] pr-[212px] pb-5 shadow-xs">
        <h1 className="font-bold text-xl leading-[30px]">
          Detail Penerbangan
        </h1>
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="flex items-center gap-3 w-full">
            <ButtonLink href="/" size="md" variant="primary" className="flex-[75%] !justify-start bg-primary-3">
              <Image src={arrowLeftIcon} alt="Back" />
              JKT &gt; MLB  - 2 Penumpang - Economy
            </ButtonLink>
            <Button size="md" variant="success" className="flex-[25%] !font-bold">
              Ubah Pencarian
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <div className="group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Selasa</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">01/03/2023</span>
            </div>
            <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
            <div className="group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Rabu</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">02/03/2023</span>
            </div>
            <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
            <div className="group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Kamis</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">03/03/2023</span>
            </div>
            <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
            <div className="group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Jumat</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">04/03/2023</span>
            </div>
            <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
            <div className="group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Sabtu</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">05/03/2023</span>
            </div>
            <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
            <div className="group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Minggu</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">06/03/2023</span>
            </div>
            <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
            <div className="group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Senin</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">07/03/2023</span>
            </div>
            <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
            <div className="group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Selasa</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">08/03/2023</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default PilihPenerbangan