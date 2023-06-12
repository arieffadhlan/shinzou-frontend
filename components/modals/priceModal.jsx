'use client'
import React from "react";
import Image from 'next/image'
import SearchIcon from '../../assets/fi_search.png'

export default function priceModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
        <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
        >
            Price
        </button>
        {showModal ? (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-6">
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl mr-6 leading-none font-normal outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className=" h-6 w-6 text-5xl block outline-none focus:outline-none">
                                ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative py-4 px-10 flex-auto flex">
                            <p className="my-1 textblack text-lg leading-relaxed">
                                Pencarian Terkini
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}