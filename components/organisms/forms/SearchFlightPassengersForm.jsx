"use client";

import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '@/redux/features/modal/modalSlice';

import Modal from '@/components/molecules/Modal';
import FlightSeatModal from '../modals/FlightSeatModal';

const SearchFlightPassengersForm = () => {
  const dispatch = useDispatch();
  const { searchFlightData } = useSelector((state) => state.flight);
  const { modalId, show } = useSelector((state) => state.modal);
  const { adult, child, baby } = searchFlightData.passengers;
  
  return (
    <>
      <div className="flex items-center gap-7 w-full">
        <div className="hidden items-center gap-3 text-neutral-3 2lg:flex">
          <span className="material-icons-round">airline_seat_recline_normal</span>
          <span className="text-sm">To</span>
        </div>
        <button type="button" onClick={() => dispatch(openModal("flight-seat"))} className="flex flex-col items-start gap-2 w-full outline-none">
          <span className="font-medium text-sm text-neutral-3 xs:text-base">Passengers</span>
          <span className="font-medium text-sm text-black xs:text-base">
            {adult + child + baby} Penumpang
          </span>
          <div className="w-full h-[1px] bg-neutral-2"></div>
        </button>
      </div>
      {show && modalId === "flight-seat" && (
        <Modal>
          <FlightSeatModal data={searchFlightData} />
        </Modal>
      )}
    </>
  );
}

export default SearchFlightPassengersForm;