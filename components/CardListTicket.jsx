import Image from 'next/image';
import AirLine from '../assets/airline.png'
import Koper from '../assets/koper.png'
import React from "react";

const CardListTicket = () => {
  return (
    <>
      <div className="max-w-md rounded shadow-lg bg-white m-2 outline-2  font-poppins ml-[680px]">
        <div className="px-6 py-4">
          <div className="flex font-bold text-[12px] mb-2 gap-2">
            <div>
            <Image
                                src={AirLine}
                                alt='Airline'
                            />
            </div>
            <p>Jet Air - Economy</p>
          </div>
            <div className="flex flex-col-5 gap-8 justify-center items-center ">
                <div>
                  <p>07.00</p>
                  <p>JKT</p>
                </div>

                <div className='gray'>
                  <p>4h 06</p>
                <div className='border-t border-gray-300'></div>
                  <p>Direct</p>
                </div>

                <div>
                  <p>07.00</p>
                  <p>MLB</p>
                </div>

                <div>
                <Image
                                src={Koper}
                                alt='Koper'
                            />
                </div>

                <div className='text-purple-500'>
                  <p>IDR 4.950.000</p>
                    <div className=" bg-primary-4 rounded-[12px] text-center">
                      <button type="submit" className="px-1 py-3 text-white font-normal text-sm ">Pilih</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default CardListTicket;