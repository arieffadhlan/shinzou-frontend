import Image from "next/image";
import flightTicketsNotFound from "@/assets/images/flight/tickets-not-found.svg";

const TicketsNotFound = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <Image src={flightTicketsNotFound} alt="Flight tickets not found" />
      <span className="font-medium text-sm text-center text-black">
        Maaf, pencarian Anda tidak ditemukan <br />
        <strong className="font-medium text-primary-4">Coba cari perjalanan lainnya!</strong>
      </span>
    </div>
  )
}

export default TicketsNotFound;