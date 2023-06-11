import Image from 'next/image';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import DesFav from '../components/DestinationFav';
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <DesFav></DesFav>
    </>
    
  )
}
