import React from 'react'
import Image from 'next/image';
import bannerImg from '../assets/img_banner.png'

export default function hero() {
  return (
    <header className="mt-44">
      <main>
        <div className="ribbon">
          <div className="w-full bg-gradient-to-r from-lightPurple to-lightPurple01 h-36"></div>
        </div>
        <div className="banner absolute top-[8.1rem] left-[4.7rem]">
        <Image
          src={bannerImg}
          alt= 'Banner'
        />
        </div>
      </main>
    </header>
  )
}
