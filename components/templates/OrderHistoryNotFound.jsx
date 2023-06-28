import Image from "next/image";
import Container from "./Container";
import ButtonLink from "../atoms/ButtonLink";
import flightHistoryNotFound from "@/assets/images/flight/not-found.svg";

const OrderHistoryNotFound = () => {
  return (
    <Container className="my-16">
      <div className="flex flex-col items-center gap-9 w-full xs:w-fit xs:mx-auto">
        <div className="flex flex-col items-center gap-4.5">
          <Image src={flightHistoryNotFound} alt="Flight tickets not found" />
          <span className="font-medium text-sm text-center text-black">
            <strong className="font-medium text-primary-4">Oops! Riwayat pesanan kosong!</strong><br />
            Anda belum melakukan pemesanan penerbangan
          </span>
        </div>
        <ButtonLink
          href="/"
          size="md"
          variant="primary"
          className="w-full"
        >
          Cari Penerbangan
        </ButtonLink>
      </div>
    </Container>
  )
}

export default OrderHistoryNotFound;