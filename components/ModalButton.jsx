import React from "react"
import Image from "next/image"
import IconUpDown from "../assets/verctor-up-down.png"

const ModalButton = () => {
    return(
      <>
      <div className="mt-6 ml-[996px] text-xs">
        <button className="bg-white hover:bg-gray-100 text-primary-5  py-2 px-4 border border-primary-5 rounded-[16px] flex items-center gap-2 " >
          <Image src={IconUpDown} alt="IconUpDown">
          </Image>
            Termurah
        </button>
      </div>
      </>
    )
}

export default ModalButton