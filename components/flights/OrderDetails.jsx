import Image from "next/image";
import airline from "@/assets/icons/airline.svg";

const OrderDetails = () => {
  return (
    <div className="flex flex-[40%] flex-col gap-3 p-4 rounded-lg bg-white shadow-2xs 2md:p-0 2md:rounded-none 2md:bg-transparent 2md:shadow-none">
      <span className="font-bold text-sm text-neutral-5 2md:text-lg">Detail Pesanan</span>
      {/* Departure */}
      <div className="flex flex-col pb-3 border-b border-neutral-2">
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm text-neutral-5">19:10</span>
          <span className="font-bold text-xs text-primary-3">Keberangkatan</span>
        </div>
        <span className="text-sm text-neutral-5">5 Maret 2023</span>
        <span className="font-medium text-sm text-neutral-5">Soekarno-Hatta International</span>
      </div>
      {/* Airline and passangers information */}
      <div className="flex flex-col gap-4 pb-3 border-b border-neutral-2">
        <div className="flex flex-col">
          <Image src={airline} alt="Airline" />
          <span className="font-bold text-sm">Jet Air - Economy</span>
          <span className="font-bold text-sm">JT - 203</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm">Informasi:</span>
          <div className="flex flex-col">
            <span className="font-medium text-sm text-primary-5">Penumpang 1: Mr. Harry Potter</span>
            <span className="text-sm">ID: 123456789</span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-sm text-primary-5">Penumpang 2: Miss Hermione</span>
            <span className="text-sm">ID: 987654321</span>
          </div>
        </div>
      </div>
      {/* Arrival */}
      <div className="flex flex-col pb-3 border-b border-neutral-2">
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm text-neutral-5">21:10</span>
          <span className="font-bold text-xs text-primary-3">Kedatangan</span>
        </div>
        <span className="text-sm text-neutral-5">5 Maret 2023</span>
        <span className="font-medium text-sm text-neutral-5">Melbourne International</span>
      </div>
      {/* Payment */}
      <div className="flex flex-col gap-1 pb-3 border-b border-neutral-2">
        <span className="font-bold text-sm text-neutral-5">Rincian Harga</span>
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm text-neutral-5">2 Penumpang</span>
          <span className="font-medium text-sm text-neutral-5">IDR 9.850.000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm text-neutral-5">Pajak</span>
          <span className="font-medium text-sm text-neutral-5">IDR 100.000</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-sm text-neutral-5 2md:text-base">Total</span>
        <span className="font-bold text-sm text-primary-4 2md:text-base">IDR 9.950.000</span>
      </div>
    </div>
  )
}

export default OrderDetails;