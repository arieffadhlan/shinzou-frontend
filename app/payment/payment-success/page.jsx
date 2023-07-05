import Image from "next/image";

import flightHistoryNotFound from "@/assets/images/flight/not-found.svg";
import Container from "@/components/templates/Container";
import Button from "@/components/atoms/Button";
import ButtonLink from "@/components/atoms/ButtonLink";

const PaymentSuccess = () => {
  return (
    <Container className="mt-32 mt mb-16">
      <div className="flex flex-col items-center gap-9 w-full xs:w-fit xs:mx-auto">
        <div className="flex flex-col items-center gap-4.5">
          <Image src={flightHistoryNotFound} alt="Flight tickets not found" />
          <span className="font-medium text-sm text-center text-black">
						<strong className="font-medium text-primary-4">Selamat!</strong><br />
						Transaksi Pembayaran Tiket Sukses!
          </span>
        </div>
        <div className="flex flex-col w-full gap-3">
					<Button size="md" variant="primary">
						Terbitkan Tiket
					</Button>
					<ButtonLink href="/" size="md" variant="primary">
						Cari Penerbangan Lain
					</ButtonLink>
        </div>
      </div>
    </Container>
  )
}

export default PaymentSuccess;