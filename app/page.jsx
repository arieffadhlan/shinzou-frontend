import Navbar from '@/components/layouts/Navbar';
import Hero from '@/components/Hero';
import FavoriteDestination from '@/components/FavoriteDestination';
import NavbarPayment from '@/components/payments/NavbarPayment';
import PaymentMethod from '@/components/payments/PaymentMethod';

const Home = () => {
  return (
    <>
      {/* <Navbar />
      <Hero />
      <FavoriteDestination />
      <SearchModal/>
      <DateModal/>
      <PriceModal/>  */}
      <NavbarPayment/>
      <PaymentMethod/>
      
    </>   
  )
}

export default Home;