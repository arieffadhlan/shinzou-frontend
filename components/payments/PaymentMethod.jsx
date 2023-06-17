
import Container from "./../layouts/Container";
import Dropdown from "../Drowdown";

const PaymentMethod = () => {
    return(
        <>
            <div className="mt-[5.5rem]">
                <div className="w-full bg-white shadow-md px-[8.5rem] pb-4">
                    <div className="pt-12 px-32 pb-3">
                        <div className="flex flex-wrap gap-3 font-bold text-xl">
                            <h1>Isi Data Diri</h1>
                            <span className="text-neutral-3">&gt; </span>
                            <h1>Bayar</h1>
                            <span className="text-neutral-3">&gt; </span>
                            <h1 className="text-neutral-3">Selesai</h1>
                        </div>
                    </div>
                    <div className=" mx-[8.5rem] bg-danger p-3 rounded-xl w-[51.5rem]">
                        <h2 className="text-center text-white font-medium text-base">Selesaikan Pembayaran sampai 10 Maret 2023 12:00</h2>
                    </div>
                </div>
            </div>
            <Container>
                <div className="mx-[8.4rem]">
                    <div className="flex flex-wrap py-8">
                        <div className="w-3/5 px-10 self-center">
                            <h2 className="font-bold text-xl pb-4">Isi Data Pembayaran</h2>
                            <div>
                                <Dropdown/>
                            </div>
                        </div>
                        <div className="ml-20">
                            <h2 className="font-bold text-lg">Booking Code: <span className="text-primary-4">6723y2GHK</span></h2>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default PaymentMethod;