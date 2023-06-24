"use client"

import Navbar from '@/components/layouts/Navbar';
import SearchFlightForm from '@/components/forms/SearchFlightForm';
import FavoriteDestination from '@/components/FavoriteDestination';

const Home = () => {
  return (
    <>
      <Navbar />  
      <SearchFlightForm />
      <FavoriteDestination />
    </>   
  )
}

export default Home;