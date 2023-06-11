import React from 'react'
import Image from 'next/image';
import btn from '../components/Button'
import bannerImg from '../assets/img_banner.png'
import planeIcon from '../assets/planeIcon.png'
import calenderIcon from '../assets/calenderIcon.png'
import passengerIcon from '../assets/passengerIcon.png'
import returnIcon from '../assets/return.png'

export default function Hero() {
  return (
    <header className="mt-44">
      <main>
        <div className="ribbon">
          <div className="w-full bg-gradient-to-r from-primary-4/50 to-primary-1 h-36"></div>
        </div>
        <div className="banner mx-24 -my-[11.8rem]">
          <Image
            src={bannerImg}
            alt= 'Banner'
          />
        </div>
        
        <form>
          <div className="relative z-0 mt-36 group bg-white w-[968px] h-[298px] mx-auto shadow-lg rounded-xl">
            <div className="container px-[34px] py-6">
              <p className="font-bold text-xl mb-7">Pilih Jadwal Penerbangan spesial di <span className="text-boldPurple">Tiketku!</span></p>
              
              <div className="grid mb-9 md:grid-cols-2 md:gap-28 w-full">
                <div className="relative z-0 w-full mb-6 group">
                  <Image
                    src={planeIcon}
                    alt= "route"
                    className="float-left my-2.5"
                  />
                  <div className="formContent">
                    <label for="underline_select" className="font-normal text-sm text-primaryGray pr-3">From</label>
                    <select id="underline_select" className="w-[300px] py-2.5 px-0 text-lg font-medium bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                      <option selected>Choose a country</option>
                      <option value="JKT">Jakarta (JKTA)</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>
                <div className="relative z-0 w-full mb-6 ml-10 group">
                  <Image
                    src={planeIcon}
                    alt= "route"
                    className="float-left my-2.5"
                  />
                  <div className="formContent">
                    <label for="underline_select" className="font-normal text-sm text-primaryGray pr-3">To</label>
                    <select id="underline_select" className="w-[300px] py-2.5 px-0 text-lg font-medium bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                      <option selected>Choose a country</option>
                      <option value="JKT">Jakarta (JKTA)</option>
                      <option value="MLB">Melbourne (MLB)</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>
              </div>
              <Image
                src={returnIcon}
                alt = "swap"
                className="absolute inset-[49%] top-[5.8rem] cursor-pointer"
              />

              <div classname="grid md:grid-cols-2 md:gap-28 w-full">
                <div classname="relative z-0 w-full mb-6 group">
                  <Image
                    src={calenderIcon}
                    alt= "calender"
                    className="float-left my-2.5"
                  />
                  <div className="formContent ml-1">
                    <label for="Date" className="font-normal text-sm text-primaryGray pr-3 relative top-2">Date</label>
                    <div className="ml-[2.69rem] relative top-0 -mt-10">
                      <label for="departure" className="pr-[5.23rem]">Departure</label>
                      <label for="return">Return</label>
                      <label for="departure" className="ml-80 pr-[5.23rem]">Departure</label>
                      <label for="return">Return</label>                
                    </div>
                    <div className="grid md:grid-cols-2 ml-[2.7rem]">
                      <div className="relative z-0 w-full mb-6 group">
                        <select select id="underline_select" className="w-[140px] py-2.5 px-0 text-lg font-medium bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                          <option selected>Choose a country</option>
                          <option value="JKT">Jakarta (JKTA)</option>
                          <option value="MLB">Melbourne (MLB)</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                        <select select id="underline_select" className="w-[140px] ml-[1.23rem] py-2.5 px-0 text-lg font-medium bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                          <option selected>Choose a country</option>
                          <option value="JKT">Jakarta (JKTA)</option>
                          <option value="MLB">Melbourne (MLB)</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                      </div>
                      <div className="relative z-0 w-full mb-6 group ml-20">
                        <Image
                          src={passengerIcon}
                          alt= "passenger"
                          className="float-left my-2.5"
                        />
                        <div className="px-4 relative">
                          <label for="underline_select" className="font-normal text-sm text-primaryGray pr-3">To</label>
                          <select select id="underline_select" className="w-[140px] py-2.5 px-0 text-lg font-medium bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Choose a country</option>
                            <option value="JKT">Jakarta (JKTA)</option>
                            <option value="MLB">Melbourne (MLB)</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                          <select select id="underline_select" className="w-[140px] ml-[1.23rem] py-2.5 px-0 text-lg font-medium bg-transparent border-0 border-b-2 border-gray-200 appearance-none  dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Choose a country</option>
                            <option value="JKT">Jakarta (JKTA)</option>
                            <option value="MLB">Melbourne (MLB)</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative justify-center bottom-24 right-7">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer"></input>
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            
            <button className="w-[968px] h-auto text-white bg-boldPurple px-5 py-3 relative bottom-10 rounded-b-xl">Cari Penerbangan</button>
          </div>
        </form>

      </main>
    </header>
  )
}
