import Image from "next/image";
import NavbarPayment from "./NavbarPayment";
import Container from "./../layouts/Container";
import IlustrationShopping from "@/assets/images/ilustration_shopping.png"

const PaymentSucces = () => {
    return(
        <>
            <NavbarPayment/>
            <div className="mt-[5.5rem]">
                <div className="w-full bg-white shadow-md px-[8.5rem] pb-4">
                    <div className="pt-12 px-32 pb-3">
                        <div className="flex flex-wrap gap-3 font-bold text-xl">
                            <h1>Isi Data Diri</h1>
                            <span className="text-neutral-3">&gt; </span>
                            <h1>Bayar</h1>
                            <span className="text-neutral-3">&gt; </span>
                            <h1>Selesai</h1>
                        </div>
                    </div>
                    <div className=" mx-[8.5rem] bg-success p-3 rounded-xl w-[51.5rem]">
                        <h2 className="text-center text-white font-medium text-base">Terimakasih atas pembayaran transaksi</h2>
                    </div>
                </div>
            </div>
            <Container className="mt-20">
                <div className="w-full">
                    <Image
                        src={IlustrationShopping}
                        alt = "Ilustration Shopping Cart"
                        className="mx-auto mb-5"
                    />
                    <div className="text-center font-medium text-sm">
                        <h2
                            className="text-primary-4"
                            >
                            Selamat!
                        </h2>
                        <h2>Transaksi Pembayaran Tiket sukses!</h2>
                    </div>
                </div>
                <div className="mt-12 font-medium text-base">
                    <button
                    type="submit"
                    className="bg-primary-4 text-white p-4 w-[21.6rem] block mx-auto rounded-xl my-4"
                    >   
                        Terbitkan Tiket
                    </button>

                    <button
                    type="submit"
                    className="bg-primary-2 text-white p-4 w-[21.6rem] block mx-auto rounded-xl"
                    >   
                        Cari Penerbangan Lain
                    </button>
                </div>
            </Container>
        </>
    )
}

export default PaymentSucces;