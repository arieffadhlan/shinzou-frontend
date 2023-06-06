import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.png'
import SearchIcon from '../assets/fi_search.png'
import MasukIcon from '../assets/fi_log-in.png'
import React from 'react'

function navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 font-poppins shadow-lg bg-white">
        <div className="max-w-full m-auto flex flex-wrap justify-between items-center px-10 py-4">
            <div>
                <Link href='/'>
                    <Image
                        src={logo}
                        alt='logo'
                        className="float-left"
                    />
                </Link>

                <div className="search relative float-right pt-[3px] px-8">
                    <form action="" className='flex'>
                        <div className="searcBar">
                            <input
                                type="text" placeholder='Cari disini ...'
                                className='w-[444px] h-[48px] rounded-[16px] bg-[#EEEEEE] font-normal text-sm p-4 pl-3 placeholder:text-[#8A8A8A] '
                            />
                        </div>
                        <div className="searchIcon absolute right-16 top-4 inset-y-0 pointer-events-none">
                            <Image
                                src={SearchIcon}
                                alt='Search Icon'
                            />
                        </div>
                    </form>
                </div>
            </div>
            
            <div className="flex bg-boldPurple px-4 py-3.5 rounded-[12px]">
                <div className="btnIcon">
                    <Image
                        src={MasukIcon}
                        alt='Icon Search'
                    />
                </div>
                <button type="submit" className="pl-2 text-white font-normal text-sm">Masuk</button>
            </div>

        </div>
    </nav>
  )
}

export default navbar