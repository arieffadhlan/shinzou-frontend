import IconsPractical from "@/assets/images/travel/practical.png"
import IconsService from "@/assets/images/travel/service.png"
import IconsPayment from "@/assets/images/travel/payment.png"
import IconsGuarante from "@/assets/images/travel/guarante.png"

const TravelReason = () => {
    return (
        <>
        <Container>
            <div>
                <h2 className="text-2xl text-center text-black font-bold">
                    Mengapa memesan di Shinzo?
                </h2>

                <div className="flex justify-center mt-5">

                    <div className="flex flex-col ">
                        <div className="text-center justify-center">
                            <div className="">
                                <Image
                                src={IconsPractical} alt="IconsPractical">
                                </Image>
                            </div>
                            <div className="">
                                <h2 className="text-2xl font-bold mt-12 mb-4">Praktis, Tanpa Repot</h2>
                                <div className="text-base ">Bebas transaksi di mana saja dan kapan saja, mulai dari desktop, aplikasi mobile, atau situs web mobile.</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="text-center">
                            <div>
                                <Image
                                src={IconsService} alt="IconsService">
                                </Image>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mt-12 mb-4">Layanan Terpercaya</h2>
                                <div className="text-base ">Anda akan mendapat apa  yang Anda bayar dijamin!</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="text-center">
                            <div>
                                <Image
                                src={IconsPayment} alt="IconsPayment">
                                </Image>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mt-12 mb-4">Berbagai Pilihan Pembayaran</h2>
                                <div className="text-base">Pembayaran jadi semakin fleksibel dengan berbagi pilihan, mulai dari ATM, Transfer Bank, Kartu Kredit, Bayar Tunai di Konter, hingga Internet Banking.</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="text-center">
                            <div className="">
                                <Image
                                src={IconsGuarante} alt="IconsGuarante">
                                </Image>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mt-12 mb-4">Jaminan Keamanan Transaksi</h2>
                                <div className="text-base">Teknologi SSL dari RapidSSL dengan Sertifikat yang terotentikasi menjamin privasi dan keamanan transaksi online Anda. Konfirmasi instan dan e-tiket atau voucher dikirim langsung ke email Anda.</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </Container>
        </>
    )
}
export default TravelReason