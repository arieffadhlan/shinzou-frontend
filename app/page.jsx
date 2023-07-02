"use client"

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { clearFlightState } from '@/redux/features/flight/flightSlice';
import { clearTransactionState } from '@/redux/features/transaction/transactionSlice';

import Navbar from '@/components/organisms/Navbar';
import SearchFlightForm from '@/components/templates/SearchFlightForm';
import FavoriteDestination from '@/components/templates/FavoriteDestination';

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
    </>   
  )
}

export default Home;