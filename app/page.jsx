"use client"

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearState } from '@/redux/features/flight/flightSlice';

import Navbar from '@/components/organisms/Navbar';
import SearchFlightForm from '@/components/templates/SearchFlightForm';
import FavoriteDestination from '@/components/templates/FavoriteDestination';

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(clearState());  
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