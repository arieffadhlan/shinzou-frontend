import Image from 'next/image';
import React from 'react'
import Empty from '../assets/empty.png'

const Empty = () => {
    return (
      <>
      <div className='empty d-flex bg-white w-100 h-100  align-items-center justify-content-center'>
        <div className='ml-[670px]'> 
            <Image
                src={Empty}
                  alt="Empty"
                  width={276}
                  height={194}
                />
        </div>
        <div className='font-poppins text-center'>
            <h3>Maaf, pencarian Anda tidak ditemukan</h3>
            <h3 className='text-purple -500' >Coba cari perjalanan lainnya!</h3>
        </div>
      </div>
      </>
  );
};

export default Empty;