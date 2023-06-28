"use client";

import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '@/redux/features/modal/modalSlice';

import Modal from '@/components/molecules/Modal';
import FlightClassModal from '../modals/FlightClassModal';

const SearchFlightClassForm = () => {
  const dispatch = useDispatch();
  const { searchFlightData } = useSelector((state) => state.flight);
  const { modalId, show } = useSelector((state) => state.modal);

  return (
    <>
      <button 
        type="button" 
        onClick={() => dispatch(openModal("flight-class"))} 
        className="flex flex-col items-start gap-2 w-full outline-none"
      >
        <span className="font-medium text-sm text-neutral-3 xs:text-base">
          Seat Class
        </span>
        <span className="font-medium text-sm text-black xs:text-base">
          {searchFlightData.seat_class}
        </span>
        <div className="w-full h-[1px] bg-neutral-2"></div>
      </button>
      {show && modalId === "flight-class" && (
        <Modal>
          <FlightClassModal data={searchFlightData} />
        </Modal>
      )}
    </>
  );
}

export default SearchFlightClassForm;