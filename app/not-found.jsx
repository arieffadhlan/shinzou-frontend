import Image from "next/image"
import flightTicketsNotFound from "@/assets/images/flight/tickets-not-found.svg";
import ButtonLink from "@/components/atoms/ButtonLink";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 min-h-screen w-full">
      <Image src={flightTicketsNotFound} alt="Flight tickets not found" />
      <ButtonLink 
        href="/" 
        size="md" 
        variant="primary" 
        className="px-4 rounded-xl"
      >
        Beranda
      </ButtonLink>
    </div>
  )
}

export default NotFound