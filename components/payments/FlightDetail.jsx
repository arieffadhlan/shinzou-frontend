import Image from "next/image";
import ThumbLogo from "@/assets/images/thumbLogo.png";

const FlightDetail = () => {
    return(
        <>
            <div className="ml-6 ">
                <h2 
                    className="font-bold text-lg pb-3">
                    Booking Code: <span className="text-primary-4">6723y2GHK</span>
                </h2>
                <div className="flex flex-wrap gap-20">
                    <div className="mb-1">
                        <span 
                            className="block text-base font-bold">
                            07.00
                        </span>
                        <span
                            className="text-sm font-normal">
                            3 Maret 2023
                        </span>
                    </div>
                    <h4 
                        className="text-xs font-bold text-primary-3">
                        Keberangkatan
                    </h4>
                </div>
                <h3 
                    className="text-xs font-medium pb-2">
                    Soekarno Hatta - Terminal 1A Domestik
                </h3>
                <div className="border-t-2 px-2">
                    <div>
                        <Image
                            src={ThumbLogo}
                            className="float-left top-[3.7rem] relative"
                        />
                    </div>
                    <div className="mx-[1.65rem] px-2 py-2 text-sm">
                        <div className="font-bold pb-3">  
                            <h3>Jet Air - Economy</h3>
                            <h3>JT - 203</h3>
                        </div>
                        <h3
                            className="font-bold">
                            Informasi:
                        </h3>
                        <h4>Baggage 20 kg</h4>
                        <h4>Cabin baggage 7 kg</h4>
                        <h4>In Flight Entertainment</h4>
                    </div>
                </div>
                <div className="border-t-2 flex flex-wrap gap-24">
                    <div className="pt-2">
                            <span 
                                className="block text-sm font-bold">
                                11.00
                            </span>
                            <span
                                className="text-sm font-normal">
                                3 Maret 2023
                            </span>
                    </div>
                    <h4 
                        className="text-xs font-bold text-primary-3 py-2">
                        Kedatangan
                    </h4>
                </div>
                <h3 
                    className="text-xs font-medium pb-2">
                    Melbourne International Airport
                </h3>
                <div className="border-t-2 text-sm py-2">
                    <h3 className="font-bold pb-1">Rincian Harga</h3>
                    <div className="pb-1">
                        <span>2 Adults</span>
                        <span className="float-right">IDR 9.550.000</span>
                    </div>
                    <div className="pb-1">
                        <span>2 Adults</span>
                        <span className="float-right">IDR 9.550.000</span>
                    </div>
                    <div>
                        <span>2 Adults</span>
                        <span className="float-right">IDR 9.550.000</span>
                    </div>
                </div>
                <div className="border-t-2 flex flex-wrap gap-32 py-2 text-base font-bold">
                    <h2>Total</h2>
                    <h2
                        className="text-primary-4">
                        IDR 9.850.000
                    </h2>
                </div>
            </div>
        </>
    )
}

export default FlightDetail;