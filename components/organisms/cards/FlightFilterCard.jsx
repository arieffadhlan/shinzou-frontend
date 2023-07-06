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
        <h2 className="font-medium text-base text-black">
          Filter
        </h2>
        <button 
          onClick={() => dispatch(openModal("flight-filter"))}
          className="flex items-center gap-2 pt-4 border-t border-neutral-2"
        >
          <span className="material-icons-round text-primary-4">swap_vert</span>
          <span className="text-base text-neutral-5 group-hover:text-black">Transit</span>
        </button>
      </div>
      {show && modalId === "flight-filter" && (
        <Modal>
          <FlightFilterModal data={flights} />
        </Modal>
      )}
    </>
  );
}

export default FlightFilterCard;