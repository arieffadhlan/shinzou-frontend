"use client"

import Navbar from '@/components/organisms/Navbar';
import SearchFlightForm from '@/components/templates/SearchFlightForm';
import FavoriteDestination from '@/components/templates/FavoriteDestination';

const Home = () => {
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