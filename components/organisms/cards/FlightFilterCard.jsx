"use client";

import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/redux/features/modal/modalSlice";
import Modal from "@/components/molecules/Modal";
import FlightFilterModal from "../modals/FlightFilterModal";

const FlightFilterCard = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((state) => state.flight);
  const { modalId, show } = useSelector((state) => state.modal);
  
  return (
    <>
      <div className="flex flex-col gap-2 w-full h-fit p-6 rounded-2xl shadow-xs 2md:w-[268px]">
        <button 
          onClick={() => dispatch(openModal("flight-filter"))}
          className="flex items-center gap-2"
        >
          <span className="material-icons-round text-primary-4">swap_vert</span>
          <span className="font-medium text-base text-neutral-5 group-hover:text-black">Filter</span>
        </button>
      </div>
      {show && modalId === "flight-filter" && (
        <Modal saveButton={false}>
          <FlightFilterModal data={flights} />
        </Modal>
      )}
    </>
  );
}

export default FlightFilterCard;