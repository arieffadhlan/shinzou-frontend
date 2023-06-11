import Image from "next/image";
import Container from "@/components/layouts/Container";
import flightTicketsSoldOut from "@/assets/images/flight/tickets-sold-out.svg";

const TicketsSoldOut = () => {
  return (
    <Container className="flex flex-col justify-center items-center gap-9 my-[100px]">
      <Image src={flightTicketsSoldOut} alt="Flight tickets sold out" />
      <span className="font-medium text-sm text-center text-black">
        Maaf, tiket terjual habis! <br />
        <strong className="font-medium text-primary-4">Coba cari perjalanan lainnya!</strong>
      </span>
    </Container>
  )
}

export default TicketsSoldOut;