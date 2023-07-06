"use client"

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { clearFlightState } from '@/redux/features/flight/flightSlice';
import { clearTransactionState } from '@/redux/features/transaction/transactionSlice';

import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
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
      <AboutShinzou />
      <Footer />
    </>   
  )
}

export default Home;