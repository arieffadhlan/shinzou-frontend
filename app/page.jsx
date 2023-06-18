import Navbar from '@/components/layouts/Navbar';
import SearchFlight from '@/components/flights/SearchFlight';
import FavoriteDestination from '@/components/FavoriteDestination';
import NavbarPayment from '@/components/payments/NavbarPayment';
import PaymentMethod from '@/components/payments/PaymentMethod';

const Home = () => {
  return (
    <>
      {/* <Navbar />
      <SearchFlight />
      <FavoriteDestination /> */}
      <NavbarPayment/>
      <PaymentMethod/>
    </>   
  )
}

export default Home;