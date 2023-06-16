import ButtonLink from "../ButtonLink";
import Container from "../layouts/Container";
import FlightHistoryNotFound from "@/assets/images/flight/history-not-found.svg"
import Image from "next/image";

const HistoryNotFound = () => {
  return (
    <>
      <Container className="flex flex-col justify-center items-center gap-9 my-[100px]">
        <span className="font-medium text-sm text-center text-primary-4">
          Opps! Riwayat pemesanan kosong! <br />
          <strong className="font-medium text-black">
            Anda belum melakukan pemesanan penerbangan!
          </strong>
        </span>

        <Image
        src={FlightHistoryNotFound}
        alt="FlightHistoryNotFound"
        >

        </Image>
        <ButtonLink
              href="/"
              size="md"
              variant="primary"
              className="!w-[345px]  bg-primary-5 xs:gap-4.5 lg:w-auto xl:flex-[75%]"
            >
              Cari Penerbangan
        </ButtonLink>
      </Container>
    </>
  );
};

export default HistoryNotFound;
