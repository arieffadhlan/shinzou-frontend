import Navbar from '@/components/layouts/Navbar';
import SearchFlight from '@/components/flights/SearchFlight';
import FavoriteDestination from '@/components/FavoriteDestination';

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchFlight />
      <FavoriteDestination />
    </>   
  )
}

export default Home;