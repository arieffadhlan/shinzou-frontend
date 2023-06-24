import Image from "next/image";
import Container from "../layouts/Container";
import ButtonLink from "../ButtonLink";
import flightHistoryNotFound from "@/assets/images/flight/history-not-found.svg";

const HistoryNotFound = () => {
  return (
    <Container className="my-16">
      <div className="flex flex-col items-center gap-9 w-full xs:w-fit xs:mx-auto">
        <div className="flex flex-col items-center gap-4.5">
          <Image src={flightHistoryNotFound} alt="Flight tickets not found" />
          <span className="font-medium text-sm text-center text-black">
            Maaf, pencarian Anda tidak ditemukan <br />
            <strong className="font-medium text-primary-4">Coba cari perjalanan lainnya!</strong>
          </span>
        </div>
        <ButtonLink
          href="/"
          size="md"
          variant="primary"
          className="w-full bg-primary-5"
        >
          Cari Penerbangan
        </ButtonLink>
      </div>
    </Container>
  )
}

export default HistoryNotFound;