import React from 'react';
import Image from 'next/image'
import SearchIcon from '../assets/fi_search.svg'

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
        </div>
    )
}

