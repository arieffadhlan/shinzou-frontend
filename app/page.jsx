import Navbar from '@/components/layouts/Navbar';
import Hero from '@/components/Hero';
import FavoriteDestination from '@/components/FavoriteDestination';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FavoriteDestination />
      {/* <SearchModal/>
      <DateModal/>
      <PriceModal/> */}
    </>   
  )
}

export default Home;