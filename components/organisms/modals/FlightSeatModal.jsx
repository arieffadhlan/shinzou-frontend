"use client";

import { useDispatch } from "react-redux";
import { setSearchFlight } from "@/redux/features/flight/flightSlice";

const FlightSeatModal = ({ data }) => {
  const dispatch = useDispatch();
  let { adult, child, baby } = data.passengers;

  const incrementSeat = (category, count) => {
    switch (category) {
      case "adult":
        if (adult > 0) {
          dispatch(setSearchFlight({
            ...data,
            passengers: {
              ...data.passengers,
              adult: count += 1
            }
          }));
        } 
        break;
      case "child":
        dispatch(setSearchFlight({
          ...data,
          passengers: {
            ...data.passengers,
            child: count += 1
          }
        }));
        break;
      case "baby":
        dispatch(setSearchFlight({
          ...data,
          passengers: {
            ...data.passengers,
            baby: count += 1
          }
        }));
        break;
      default:
        break;
    }
  }

  const decrementSeat = (category, count) => {
    switch (category) {
      case "adult":
        if (adult > 1) {
          dispatch(setSearchFlight({
            ...data,
            passengers: {
              ...data.passengers,
              adult: count -= 1
            }
          }));
        }
        break;
      case "child":
        if (child > 0) {
          dispatch(setSearchFlight({
            ...data,
            passengers: {
              ...data.passengers,
              child: count -= 1
            }
          }));
        }
        break;
      case "baby":
        if (baby > 0) {
          dispatch(setSearchFlight({
            ...data,
            passengers: {
              ...data.passengers,
              baby: count -= 1
            }
          }));
        }
        break;
      default:
        break;
    }
  }

	return (
    <>
      <div className="flex flex-col px-4">
        {/* Adult */}
        <div className="flex justify-between items-center gap-1 py-2 border-b border-neutral-2">
          <div className="flex gap-2">
            <span className="material-icons-round !text-[20px] text-neutral-4 xs:!text-[24px]">man</span>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-sm text-neutral-5">Dewasa</span>
              <span className="text-xs text-neutral-3">(12 tahun keatas)</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button 
              type="button"
              onClick={() => decrementSeat("adult", adult)} 
              className="material-icons-round count-passangers__button"
            >
              remove
            </button>
            <div className="count-passangers">{adult}</div>
            <button 
              type="button"
              onClick={() => incrementSeat("adult", adult)} 
              className="material-icons-round count-passangers__button"
              >
                add
            </button>
          </div>
        </div>
        {/* Child */}
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
              type="button"
              onClick={() => decrementSeat("child", child)} 
              className="material-icons-round count-passangers__button"
            >
              remove
            </button>
            <div className="count-passangers">{child}</div>
            <button 
              type="button"
              onClick={() => incrementSeat("child", child)} 
              className="material-icons-round count-passangers__button"
            >
              add
            </button>
          </div>
        </div>
        {/* Baby */}
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
              type="button"
              onClick={() => decrementSeat("baby", baby)} 
              className="material-icons-round count-passangers__button"
            >
              remove
            </button>
            <div className="count-passangers">{baby}</div>
            <button 
              type="button"
              onClick={() => incrementSeat("baby", baby)} 
              className="material-icons-round count-passangers__button"
            >
              add
            </button>
          </div>
        </div>
      </div>
    </>
	);
}

export default FlightSeatModal;