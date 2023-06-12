import Navbar from '../components/navbar';
import Hero from '../components/hero';
import DesFav from '../components/DestinationFav';
import SearchModal from '../components/modals/searchModal'
import DateModal from '../components/modals/dateModal'
import PriceModal from '../components/modals/priceModal'

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