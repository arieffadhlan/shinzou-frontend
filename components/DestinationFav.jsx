import React from 'react';
import Image from 'next/image'
import SearchIcon from '../assets/fi_search.svg'
import Thailand from '../assets/thai.png'
import Sydney from '../assets/sydney.png'

export default function DestinationFav() {
    return(
        <div className="mt-20 p-4 w-[968px] mx-auto">
             <h3 className="text-base font-bold pb-5">Destinasi Favorit</h3>
             <div className="flex flex-wrap">
                <div className="desfav-btn">
                    <Image
                        src={SearchIcon}
                        alt='Search Icon'
                        className=''
                    />
                    <button className="px-1">Semua</button>
                </div>
                <div className="desfav-btn">
                    <Image
                        src={SearchIcon}
                        alt='Search Icon'
                    />
                    <button className="px-1">Asia</button>
                </div>
                <div className="desfav-btn">
                    <Image
                        src={SearchIcon}
                        alt='Search Icon'
                    />
                    <button className="px-1">Amerika</button>
                </div>
                <div className="desfav-btn">
                    <Image
                        src={SearchIcon}
                        alt='Search Icon'
                    />
                    <button className="px-1">Australia</button>
                </div>
                <div className="desfav-btn">
                    <Image
                        src={SearchIcon}
                        alt='Search Icon'
                    />
                    <button className="px-1">Eropa</button>
                </div>
                <div className="desfav-btn">
                    <Image
                        src={SearchIcon}
                        alt='Search Icon'
                    />
                    <button className="px-1">Afrika</button>
                </div>
            </div>
            
            <div className="grid grid-cols-5 mt-8 mx-3">
                <div className="w-[10.4rem] max-w-sm mx-auto bg-white border border-gray-200 rounded shadow">
                    <a href="#">    
                        <div className="badge bg-[#A06ECE] w-[4.6rem] h-6 rounded-l-xl absolute mt-4 ml-20">
                                <span className="text-white text-[10px] font-medium px-5 relative bottom-[.1rem]">Limited!</span>
                        </div>
                        <Image
                            src={Thailand}
                            alt='Thailand'
                            className="w-36 mx-auto py-4 rounded"
                        />
                    </a>
                    <div className="px-3">
                        <a href="#">
                            <h5 className="text-xs text-[#151515] font-medium">Jakarta - Bangkok</h5>
                            <p className="text-[10px] font-bold text-[#7126B5] leading-4">AirAsia</p>
                            <p className="text-[10px] font-medium leading-5">20 - 30 Maret 2023</p>
                            <h5 className="text-xs font-normal leading-5 mb-3">Mulai dari <span className="text-[#FF0000] font-bold"> IDR 950.000</span></h5>
                        </a>
                    </div>
                </div>
                
                <div className="w-[10.4rem] max-w-sm mx-auto bg-white border border-gray-200 rounded shadow">
                    <a href="#">    
                        <div className="badge bg-[#A06ECE] w-[4.6rem] h-6 rounded-l-xl absolute mt-4 ml-20">
                                <span className="text-white text-[10px] font-medium px-5 relative bottom-[.1rem]">Limited!</span>
                        </div>
                        <Image
                            src={Thailand}
                            alt='Thailand'
                            className="w-36 mx-auto py-4 rounded"
                        />
                    </a>
                    <div className="px-3">
                        <a href="#">
                            <h5 className="text-xs text-[#151515] font-medium">Jakarta - Bangkok</h5>
                            <p className="text-[10px] font-bold text-[#7126B5] leading-4">AirAsia</p>
                            <p className="text-[10px] font-medium leading-5">20 - 30 Maret 2023</p>
                            <h5 className="text-xs font-normal leading-5 mb-3">Mulai dari <span className="text-[#FF0000] font-bold"> IDR 950.000</span></h5>
                        </a>
                    </div>
                </div>

                <div className="w-[10.4rem] max-w-sm mx-auto bg-white border border-gray-200 rounded shadow">
                    <a href="#">    
                        <div className="badge bg-[#A06ECE] w-[4.6rem] h-6 rounded-l-xl absolute mt-4 ml-20">
                                <span className="text-white text-[10px] font-medium px-5 relative bottom-[.1rem]">Limited!</span>
                        </div>
                        <Image
                            src={Thailand}
                            alt='Thailand'
                            className="w-36 mx-auto py-4 rounded"
                        />
                    </a>
                    <div className="px-3">
                        <a href="#">
                            <h5 className="text-xs text-[#151515] font-medium">Jakarta - Bangkok</h5>
                            <p className="text-[10px] font-bold text-[#7126B5] leading-4">AirAsia</p>
                            <p className="text-[10px] font-medium leading-5">20 - 30 Maret 2023</p>
                            <h5 className="text-xs font-normal leading-5 mb-3">Mulai dari <span className="text-[#FF0000] font-bold"> IDR 950.000</span></h5>
                        </a>
                    </div>
                </div>

                <div className="w-[10.4rem] max-w-sm mx-auto bg-white border border-gray-200 rounded shadow">
                    <a href="#">    
                        <div className="badge bg-[#A06ECE] w-[4.6rem] h-6 rounded-l-xl absolute mt-4 ml-20">
                                <span className="text-white text-[10px] font-medium px-5 relative bottom-[.1rem]">Limited!</span>
                        </div>
                        <Image
                            src={Thailand}
                            alt='Thailand'
                            className="w-36 mx-auto py-4 rounded"
                        />
                    </a>
                    <div className="px-3">
                        <a href="#">
                            <h5 className="text-xs text-[#151515] font-medium">Jakarta - Bangkok</h5>
                            <p className="text-[10px] font-bold text-[#7126B5] leading-4">AirAsia</p>
                            <p className="text-[10px] font-medium leading-5">20 - 30 Maret 2023</p>
                            <h5 className="text-xs font-normal leading-5 mb-3">Mulai dari <span className="text-[#FF0000] font-bold"> IDR 950.000</span></h5>
                        </a>
                    </div>
                </div>

                <div className="w-[10.4rem] max-w-sm mx-auto bg-white border border-gray-200 rounded shadow">
                    <a href="#">    
                        <div className="badge bg-[#A06ECE] w-[4.6rem] h-6 rounded-l-xl absolute mt-4 ml-20">
                                <span className="text-white text-[10px] font-medium px-5 relative bottom-[.1rem]">Limited!</span>
                        </div>
                        <Image
                            src={Thailand}
                            alt='Thailand'
                            className="w-36 mx-auto py-4 rounded"
                        />
                    </a>
                    <div className="px-3">
                        <a href="#">
                            <h5 className="text-xs text-[#151515] font-medium">Jakarta - Bangkok</h5>
                            <p className="text-[10px] font-bold text-[#7126B5] leading-4">AirAsia</p>
                            <p className="text-[10px] font-medium leading-5">20 - 30 Maret 2023</p>
                            <h5 className="text-xs font-normal leading-5 mb-3">Mulai dari <span className="text-[#FF0000] font-bold"> IDR 950.000</span></h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

