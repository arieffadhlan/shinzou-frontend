import Image from "next/image";
import moment from "moment";
import "moment/locale/id"

import Button from "./Button";

import airlineIcon from "@/assets/icons/airline.svg";

const FlightCard = ({ props }) => {
  moment.locale("id");
  const departureTime = moment(props.departure_time);
  const arrivalTime = moment(props.arrival_time);
  const timeDifference = arrivalTime.diff(departureTime, "minutes");
  const hourDifference = Math.floor((timeDifference % 1440) / 60);
  const minuteDifference = Math.floor((timeDifference % 1440) % 60);
  
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col px-4 py-2.5 border-2 border-[#F2F2F2] rounded-lg bg-white shadow-2xs hocus:border-primary-4/50">
          <div className="flex flex-col-reverse lg:flex-col">
            <div className="flex justify-between items-center py-2 border-t-[1px] border-[#D0D0D0] lg:py-1.5 lg:border-0">
              <div className="flex items-center gap-2">
                <Image src={airlineIcon} alt="Airline" />
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-xs text-neutral-5">{props.airplane_name} - {props.class.class_name}</span>
                  <span className="material-icons-round text-black !inline-block lg:!hidden">work_history</span>
                </div>
              </div>
              <button  
                type="button"
                data-collapse-toggle={`flight-${props.id}-details`} 
                aria-controls={`flight-${props.id}-details`} 
                aria-expanded="false" 
                className="flex justify-center items-center border border-[#D0D0D0] rounded-full"
              >
                <span className="material-icons-round text-neutral-4">expand_more</span>
              </button>
            </div>
            <div className="flex flex-col-reverse justify-between items-end gap-4 pb-4 2xs:flex-row 2xs:items-start xs:gap-16 2md:gap-10 lg:items-center lg:pb-1.5 xl:gap-16">
              <div className="flex items-center gap-4 w-full px-0 py-0 lg:py-2.5 lg:px-[30px]">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex flex-1 flex-col justify-center items-center gap-1 max-w-[48px]">
                    <span className="font-bold text-sm text-neutral-5">{departureTime.format("HH:mm")}</span>
                    <span className="font-medium text-xs text-neutral-5">JKT</span>
                  </div>
                  <div className="flex flex-2 flex-col justify-center items-center">
                    <span className="font-medium text-xs text-neutral-3">{hourDifference}h {minuteDifference}m</span>
                    <div className="flex items-center w-full">
                      <div className="w-full h-[1px] bg-[#8A8A8A]"></div>
                      <span className="material-icons-round -ml-[4px] !font-bold !text-[8px] text-neutral-3">chevron_right</span>
                    </div>
                    <span className="font-medium text-xs text-neutral-3">Direct</span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center items-center gap-1 max-w-[48px]">
                    <span className="font-bold text-sm text-neutral-5">{arrivalTime.format("HH:mm")}</span>
                    <span className="font-medium text-xs text-neutral-5">MLB</span>
                  </div>
                </div>
                <span className="material-icons-round text-primary-5 !hidden lg:!inline-block">work_history</span>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="whitespace-nowrap font-bold text-base text-primary-4">IDR {props.class.price}</span>
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
          <div id={`flight-${props.id}-details`} className="hidden flex-col px-0 pt-[22px] pb-2.5 mt-[15px] border-t-[1px] border-[#8A8A8A] xs:px-4">
            <h3 className="font-bold text-sm text-primary-5">Detail Penerbangan</h3>
            <div className="flex flex-col justify-center items-center gap-4 mt-1">
              <div className="flex flex-col gap-0.5 w-full text-neutral-5">
                <div className="flex justify-between">
                  <span className="font-normal text-sm">
                    <strong className="font-bold text-base">{departureTime.format("HH:mm")}</strong><br />
                    {departureTime.format("D MMMM YYYY")}
                  </span>
                  <span className="mt-0.5 font-bold text-xs text-primary-3">Keberangkatan</span>
                </div>
                <span className="font-medium text-sm">{props.location_from} - Terminal 1A Domestik</span>
              </div>
              <div className="w-full w h-[1px] bg-[#D0D0D0]"></div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 mt-4">
              <div className="flex flex-col gap-4 w-full text-neutral-5">
                <div className="flex flex-col">
                  <Image src={airlineIcon} alt="Airline" />
                  <span className="font-bold text-sm">{props.airplane_name} - {props.class.class_name} <br /> JT - 203</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm">Informasi:</span>
                  <ul className="font-normal text-sm">
                    {props.description.map((item) => (
                      <li key={item.id}>{item.information}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full w h-[1px] bg-[#D0D0D0]"></div>
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <div className="flex flex-col gap-0.5 w-full text-neutral-5">
                <div className="flex justify-between">
                  <span className="font-normal text-sm">
                    <strong className="font-bold text-base">{arrivalTime.format("HH:mm")}</strong><br />
                    {arrivalTime.format("D MMMM YYYY")}
                  </span>
                  <span className="mt-0.5 font-bold text-xs text-primary-3">Kedatangan</span>
                </div>
                <span className="font-medium text-sm">{props.location_to}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightCard;