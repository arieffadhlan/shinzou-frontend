'use client'
import Navbar from '@/components/layouts/Navbar';
import SearchFlight from '@/components/flights/SearchFlight';
import PilihPenerbangan from '@/components/PilihPenerbangan';
import FavoriteDestination from '@/components/FavoriteDestination';
import NavbarPayment from '@/components/payments/NavbarPayment';
import PaymentMethod from '@/components/payments/PaymentMethod';
import PaymentSucces from '@/components/payments/PaymentSucces';
import NotifModal from '@/components/payments/NotifModal';
import { Provider } from 'react-redux';
import store from '@/app/features/store'

const Home = () => {
  return (
    <>
    <Provider store={store}>
      {/* <Navbar/> */}
      {/* <NotifModal/> */}
      <SearchFlight />
      {/* <PilihPenerbangan/> */}
      {/* <FavoriteDestination /> */}
      {/* <NavbarPayment/>
      <PaymentMethod/> */}
      {/* <PaymentSucces/> */}
      </Provider>
    </>   
  )
}

export default Home;