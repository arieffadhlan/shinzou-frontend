import Image from "next/image";

import sydney from "@/assets/images/destination-sydney.webp";
import bangkok from "@/assets/images/destination-bangkok.webp";

const DestinationCard = () => {
  return (
    <>
      <div className="flex flex-col gap-1.5 p-2.5 rounded bg-neutral-1 shadow-2xs">
        <Image 
          src={bangkok} 
          alt="Sydney" 
          className="w-full h-[100px] object-cover rounded"
        />
        <div className="flex flex-col gap-1">
          <div className="flex flex-col">
            <h3 className="font-medium text-xs text-neutral-5 xs:text-base">Jakarta -&gt; Bangkok</h3>
            <span className="mb-[1px] font-bold text-2xs text-primary-4 xs:text-sm">AirAsia</span>
            <span className="font-medium text-2xs text-neutral-5 xs:text-sm">20 - 30 Maret 2023</span>
          </div>
          <h4 className="font-medium text-xs text-neutral-5 xs:text-base">
            Mulai dari&nbsp; 
            <span className="font-bold text-danger">IDR 950.000</span>
          </h4>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 p-2.5 rounded bg-neutral-1 shadow-2xs">
        <Image 
          src={bangkok} 
          alt="Sydney" 
          className="w-full h-[100px] object-cover rounded"
        />
        <div className="flex flex-col gap-1">
          <div className="flex flex-col">
            <h3 className="font-medium text-xs text-neutral-5 xs:text-base">Jakarta -&gt; Bangkok</h3>
            <span className="mb-[1px] font-bold text-2xs text-primary-4 xs:text-sm">AirAsia</span>
            <span className="font-medium text-2xs text-neutral-5 xs:text-sm">20 - 30 Maret 2023</span>
          </div>
          <h4 className="font-medium text-xs text-neutral-5 xs:text-base">
            Mulai dari&nbsp; 
            <span className="font-bold text-danger">IDR 950.000</span>
          </h4>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 p-2.5 rounded bg-neutral-1 shadow-2xs">
        <Image 
          src={sydney} 
          alt="Sydney" 
          className="w-full h-[100px] object-cover rounded"
        />
        <div className="flex flex-col gap-1">
          <div className="flex flex-col">
            <h3 className="font-medium text-xs text-neutral-5 xs:text-base">Jakarta -&gt; Sydney</h3>
            <span className="mb-[1px] font-bold text-2xs text-primary-4 xs:text-sm">AirAsia</span>
            <span className="font-medium text-2xs text-neutral-5 xs:text-sm">5 - 25 Maret 2023</span>
          </div>
          <h4 className="font-medium text-xs text-neutral-5 xs:text-base">
            Mulai dari&nbsp; 
            <span className="font-bold text-danger">IDR 3.650.000</span>
          </h4>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 p-2.5 rounded bg-neutral-1 shadow-2xs">
        <Image 
          src={sydney} 
          alt="Sydney" 
          className="w-full h-[100px] object-cover rounded"
        />
        <div className="flex flex-col gap-1">
          <div className="flex flex-col">
            <h3 className="font-medium text-xs text-neutral-5 xs:text-base">Jakarta -&gt; Sydney</h3>
            <span className="mb-[1px] font-bold text-2xs text-primary-4 xs:text-sm">AirAsia</span>
            <span className="font-medium text-2xs text-neutral-5 xs:text-sm">5 - 25 Maret 2023</span>
          </div>
          <h4 className="font-medium text-xs text-neutral-5 xs:text-base">
            Mulai dari&nbsp; 
            <span className="font-bold text-danger">IDR 3.650.000</span>
          </h4>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 p-2.5 rounded bg-neutral-1 shadow-2xs">
        <Image 
          src={bangkok} 
          alt="Sydney" 
          className="w-full h-[100px] object-cover rounded"
        />
        <div className="flex flex-col gap-1">
          <div className="flex flex-col">
            <h3 className="font-medium text-xs text-neutral-5 xs:text-base">Jakarta -&gt; Bangkok</h3>
            <span className="mb-[1px] font-bold text-2xs text-primary-4 xs:text-sm">AirAsia</span>
            <span className="font-medium text-2xs text-neutral-5 xs:text-sm">20 - 30 Maret 2023</span>
          </div>
          <h4 className="font-medium text-xs text-neutral-5 xs:text-base">
            Mulai dari&nbsp; 
            <span className="font-bold text-danger">IDR 950.000</span>
          </h4>
        </div>
      </div>
    </>
  )
}

export default DestinationCard;