import Navbar from '../components/layouts/Navbar';
import Hero from '../components/Hero';
import DesFav from '../components/DestinationFav';
import SearchModal from '../components/modals/SearchModal'
import DateModal from '../components/modals/DateModal'
import PriceModal from '../components/modals/PriceModal'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <DesFav></DesFav>
      <SearchModal/>
      <DateModal/>
      <PriceModal/>
    </>   
  )
}

export default Home;