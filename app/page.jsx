import Navbar from '@/components/layouts/Navbar';
import SearchFlight from '@/components/flights/SearchFlight';
import FavoriteDestination from '@/components/FavoriteDestination';
import NavbarPayment from '@/components/payments/NavbarPayment';
import PaymentMethod from '@/components/payments/PaymentMethod';
import PaymentSucces from '@/components/payments/PaymentSucces';
import NotifModal from '@/components/payments/NotifModal';

const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <NotifModal/>
      {/* <SearchFlight />
      <FavoriteDestination />  */}
      {/* <NavbarPayment/>
      <PaymentMethod/> */}
      {/* <PaymentSucces/> */}
    </>   
  )
}

export default Home;