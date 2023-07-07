"use client"

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { clearFlightState } from '@/redux/features/flight/flightSlice';
import { clearTransactionState } from '@/redux/features/transaction/transactionSlice';

import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import Partners from '@/components/organisms/Partners';
import AboutShinzou from '@/components/templates/AboutShinzou';
import FavoriteDestination from '@/components/templates/FavoriteDestination';
import SearchFlightForm from '@/components/templates/SearchFlightForm';

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(clearFlightState());  
    dispatch(clearTransactionState());  
  }, [])
  
  return (
    <>
      <Navbar />  
      <main>
        <SearchFlightForm />
        <FavoriteDestination />
      </main>
      <Partners />
      <AboutShinzou />
      <Footer />
    </>   
  )
}

export default Home;