import Image from 'next/image';

import Button from './Button';

import airlineIcon from "@/assets/icons/airline.svg";

const FlightCard = () => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <div className="cursor-pointer flex flex-col px-4 py-2.5 border-2 border-[#F2F2F2] rounded-lg bg-white shadow-2xs hocus:border-primary-4/50">
          <div className="flex flex-col-reverse lg:flex-col">
            <div className="flex justify-between items-center py-2 border-t-[1px] border-[#D0D0D0] lg:py-1.5 lg:border-0">
              <div className="flex items-center gap-2">
                <Image src={airlineIcon} alt="Airline" />
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-xs leading-[18px] text-[#151515]">Jet Air - Economy</span>
                  <span className="material-icons-round text-black !inline-block lg:!hidden">work_history</span>
                </div>
              </div>
              <div className="flex justify-center items-center border border-[#D0D0D0] rounded-full">
                <span className="material-icons-round text-[#3C3C3C]">expand_more</span>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between items-end gap-6 pb-4 2xs:flex-row 2xs:items-start xs:gap-16 2md:gap-10 lg:items-center lg:pb-1.5 xl:gap-16">
              <div className="flex items-center gap-4 w-full px-0 py-0 lg:py-2.5 lg:px-[30px]">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex flex-1 flex-col justify-center items-center gap-1 max-w-[48px]">
                    <span className="font-bold text-sm text-[#151515]">07:00</span>
                    <span className="font-medium text-xs leading-[18px] text-[#151515]">JKT</span>
                  </div>
                  <div className="flex flex-2 flex-col justify-center items-center">
                    <span className="font-medium text-xs leading-[18px] text-[#8A8A8A]">4h 0m</span>
                    <div className="flex items-center w-full">
                      <div className="w-full h-[1px] bg-[#8A8A8A]"></div>
                      <span className="material-icons-round -ml-[4px] !font-bold !text-[8px] text-[#8A8A8A]">chevron_right</span>
                    </div>
                    <span className="font-medium text-xs leading-[18px] text-[#8A8A8A]">Direct</span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center items-center gap-1 max-w-[48px]">
                    <span className="font-bold text-sm text-[#151515]">11:00</span>
                    <span className="font-medium text-xs leading-[18px] text-[#151515]">MLB</span>
                  </div>
                </div>
                <span className="material-icons-round text-primary-5 !hidden lg:!inline-block">work_history</span>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="whitespace-nowrap font-bold text-base text-primary-4">IDR 4.950.000</span>
                <Button 
                  size="md" 
                  variant="primary" 
                  className="hidden !px-8 !py-1 lg:flex"
                >
                  Pilih
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer flex flex-col px-4 py-2.5 border-2 border-[#F2F2F2] rounded-lg bg-white shadow-2xs hocus:border-primary-4/50">
          <div className="flex flex-col-reverse lg:flex-col">
            <div className="flex justify-between items-center py-2 border-t-[1px] border-[#D0D0D0] lg:py-1.5 lg:border-0">
              <div className="flex items-center gap-2">
                <Image src={airlineIcon} alt="Airline" />
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-xs leading-[18px] text-[#151515]">Jet Air - Economy</span>
                  <span className="material-icons-round text-black !inline-block lg:!hidden">work_history</span>
                </div>
              </div>
              <div className="flex justify-center items-center border border-[#D0D0D0] rounded-full">
                <span className="material-icons-round text-[#3C3C3C]">expand_more</span>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between items-end gap-6 pb-4 2xs:flex-row 2xs:items-start xs:gap-16 2md:gap-10 lg:items-center lg:pb-1.5 xl:gap-16">
              <div className="flex items-center gap-4 w-full px-0 py-0 lg:py-2.5 lg:px-[30px]">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex flex-1 flex-col justify-center items-center gap-1 max-w-[48px]">
                    <span className="font-bold text-sm text-[#151515]">08:00</span>
                    <span className="font-medium text-xs leading-[18px] text-[#151515]">JKT</span>
                  </div>
                  <div className="flex flex-2 flex-col justify-center items-center">
                    <span className="font-medium text-xs leading-[18px] text-[#8A8A8A]">4h 0m</span>
                    <div className="flex items-center w-full">
                      <div className="w-full h-[1px] bg-[#8A8A8A]"></div>
                      <span className="material-icons-round -ml-[4px] !font-bold !text-[8px] text-[#8A8A8A]">chevron_right</span>
                    </div>
                    <span className="font-medium text-xs leading-[18px] text-[#8A8A8A]">Direct</span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center items-center gap-1 max-w-[48px]">
                    <span className="font-bold text-sm text-[#151515]">12:00</span>
                    <span className="font-medium text-xs leading-[18px] text-[#151515]">MLB</span>
                  </div>
                </div>
                <span className="material-icons-round text-primary-5 !hidden lg:!inline-block">work_history</span>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="whitespace-nowrap font-bold text-base text-danger">IDR 5.950.000</span>
                <Button 
                  size="md" 
                  variant="primary" 
                  className="hidden !px-8 !py-1 lg:flex"
                >
                  Pilih
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer flex flex-col px-4 py-2.5 border-2 border-[#F2F2F2] rounded-lg bg-white shadow-2xs hocus:border-primary-4/50">
          <div className="flex flex-col-reverse lg:flex-col">
            <div className="flex justify-between items-center py-2 border-t-[1px] border-[#D0D0D0] lg:py-1.5 lg:border-0">
              <div className="flex items-center gap-2">
                <Image src={airlineIcon} alt="Airline" />
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-xs leading-[18px] text-[#151515]">Jet Air - Economy</span>
                  <span className="material-icons-round text-black !inline-block lg:!hidden">work_history</span>
                </div>
              </div>
              <div className="flex justify-center items-center border border-[#D0D0D0] rounded-full">
                <span className="material-icons-round text-[#3C3C3C]">expand_more</span>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between items-end gap-6 pb-4 2xs:flex-row 2xs:items-start xs:gap-16 2md:gap-10 lg:items-center lg:pb-1.5 xl:gap-16">
              <div className="flex items-center gap-4 w-full px-0 py-0 lg:py-2.5 lg:px-[30px]">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex flex-1 flex-col justify-center items-center gap-1 max-w-[48px]">
                    <span className="font-bold text-sm text-[#151515]">13:15</span>
                    <span className="font-medium text-xs leading-[18px] text-[#151515]">JKT</span>
                  </div>
                  <div className="flex flex-2 flex-col justify-center items-center">
                    <span className="font-medium text-xs leading-[18px] text-[#8A8A8A]">4h 0m</span>
                    <div className="flex items-center w-full">
                      <div className="w-full h-[1px] bg-[#8A8A8A]"></div>
                      <span className="material-icons-round -ml-[4px] !font-bold !text-[8px] text-[#8A8A8A]">chevron_right</span>
                    </div>
                    <span className="font-medium text-xs leading-[18px] text-[#8A8A8A]">Direct</span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center items-center gap-1 max-w-[48px]">
                    <span className="font-bold text-sm text-[#151515]">17:15</span>
                    <span className="font-medium text-xs leading-[18px] text-[#151515]">MLB</span>
                  </div>
                </div>
                <span className="material-icons-round text-primary-5 !hidden lg:!inline-block">work_history</span>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="whitespace-nowrap font-bold text-base text-primary-4">IDR 7.225.000</span>
                <Button 
                  size="md" 
                  variant="primary" 
                  className="hidden !px-8 !py-1 lg:flex"
                >
                  Pilih
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer flex flex-col px-4 py-2.5 border-2 border-[#F2F2F2] rounded-lg bg-white shadow-2xs hocus:border-primary-4/50">
          <div className="flex flex-col-reverse lg:flex-col">
            <div className="flex justify-between items-center py-2 border-t-[1px] border-[#D0D0D0] lg:py-1.5 lg:border-0">
              <div className="flex items-center gap-2">
                <Image src={airlineIcon} alt="Airline" />
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-xs leading-[18px] text-[#151515]">Jet Air - Economy</span>
                  <span className="material-icons-round text-black !inline-block lg:!hidden">work_history</span>
                </div>
              </div>
              <div className="flex justify-center items-center border border-[#D0D0D0] rounded-full">
                <span className="material-icons-round text-[#3C3C3C]">expand_more</span>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between items-end gap-6 pb-4 2xs:flex-row 2xs:items-start xs:gap-16 2md:gap-10 lg:items-center lg:pb-1.5 xl:gap-16">
              <div className="flex items-center gap-4 w-full px-0 py-0 lg:py-2.5 lg:px-[30px]">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex flex-1 flex-col justify-center items-center gap-1 max-w-[48px]">
                    <span className="font-bold text-sm text-[#151515]">20:15</span>
                    <span className="font-medium text-xs leading-[18px] text-[#151515]">JKT</span>
                  </div>
                  <div className="flex flex-2 flex-col justify-center items-center">
                    <span className="font-medium text-xs leading-[18px] text-[#8A8A8A]">3h 15m</span>
                    <div className="flex items-center w-full">
                      <div className="w-full h-[1px] bg-[#8A8A8A]"></div>
                      <span className="material-icons-round -ml-[4px] !font-bold !text-[8px] text-[#8A8A8A]">chevron_right</span>
                    </div>
                    <span className="font-medium text-xs leading-[18px] text-[#8A8A8A]">Direct</span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center items-center gap-1 max-w-[48px]">
                    <span className="font-bold text-sm text-[#151515]">23:30</span>
                    <span className="font-medium text-xs leading-[18px] text-[#151515]">MLB</span>
                  </div>
                </div>
                <span className="material-icons-round text-primary-5 !hidden lg:!inline-block">work_history</span>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="whitespace-nowrap font-bold text-base text-primary-4">IDR 8.010.000</span>
                <Button 
                  size="md" 
                  variant="primary" 
                  className="hidden !px-8 !py-1 lg:flex"
                >
                  Pilih
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightCard;