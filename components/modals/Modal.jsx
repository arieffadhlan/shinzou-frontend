"use client";

import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/features/modal/modalSlice";
import Button from "../Button";

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const close = () => {
    dispatch(closeModal());
  }
  
  return (
    <div className="fixed z-50 overflow-x-hidden overflow-y-auto top-0 left-0 right-0 flex justify-center items-center max-h-full w-full h-[calc(100%-1rem)] p-4 md:inset-0">
      <div className="flex flex-col w-[400px] rounded-2xl bg-neutral-1 shadow-xs z-10">
        <div className="flex justify-end px-4 pt-4 pb-3.5 border-b border-neutral-2">
          <button 
            type="button" 
            onClick={close} 
            className="material-icons-round cursor-pointer text-neutral-5"
          >
            close
          </button>
        </div>
        {children}
        <div className="flex justify-end px-4 py-4">
          <Button
            onClick={close}
            size="lg"
            variant="primary"
            className="px-11 bg-primary-5"
          >
            Simpan
          </Button>
        </div>
      </div>
      {/* Backdrop */}
      <div onClick={close} className="fixed inset-0 opacity-[60%] bg-black"></div>
    </div>
  )
}

export default Modal;