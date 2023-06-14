import Button from "../Button"


const FilterModal = () => {
    return (
        <>
            <div className="flex flex-col gap-6 h-[384]  p-6 rounded-2xl shadow-xs w-[400px] ml-6 mt-8">
                <div className="flex flex-col gap-2">

                    <div className="flex justify-end" >
                        <span class="material-symbols-rounded">
                            close
                        </span>
                    </div>

                    <div className="group cursor-pointer flex justify-between items-center pb-4 border-b border-[#D0D0D0]">
                        <div className="flex items-center gap-2">
                            <span className=" text-base text-[#151515] group-hover:text-black font-bold ">Harga </span>
                            <span className=" text-base text-[#151515] group-hover:text-black">- Termurah</span>
                        </div>
                    </div>
                    <div className="group cursor-pointer flex justify-between items-center pb-4 border-b border-[#D0D0D0]">
                        <div className="flex items-center gap-2">
                            <span className=" text-base text-[#151515] group-hover:text-black font-bold ">Harga</span>
                            <span className="text-base text-[#151515] group-hover:text-black">- Terpendek</span>
                        </div>

                    </div>
                    <div className="group cursor-pointer flex justify-between items-center pb-4 border-b border-[#D0D0D0]">
                        <div className="flex items-center gap-2">
                            <span className=" text-base text-[#151515] group-hover:text-black font-bold ">Keberangkatan</span>
                            <span className=" text-base text-[#151515] group-hover:text-black">- Paling Awal</span>
                        </div>

                    </div>
                    <div className="group cursor-pointer flex justify-between items-center pb-4 border-b border-[#D0D0D0]">
                        <div className="flex items-center gap-2">
                            <span className=" text-base text-[#151515] group-hover:text-black font-bold ">Keberangkatan</span>
                            <span className="text-base text-[#151515] group-hover:text-black">- Paling Akhir</span>
                        </div>

                    </div>
                    <div className="group cursor-pointer flex justify-between items-center pb-4 border-b border-[#D0D0D0]">
                        <div className="flex items-center gap-2">
                            <span className=" text-base text-[#151515] group-hover:text-black font-bold ">Kedatangan</span>
                            <span className=" text-base text-[#151515] group-hover:text-black">- Paling Awal</span>
                        </div>

                    </div>
                    <div className="group cursor-pointer flex justify-between items-center pb-4 border-b border-[#D0D0D0]">
                        <div className="flex items-center gap-2">
                            <span className=" text-base text-[#151515] group-hover:text-black font-bold ">Kedatangan</span>
                            <span className=" text-base text-[#151515] group-hover:text-black">- Paling Akhir</span>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button
                            size="md"
                            variant="primary"
                            className="w-[150px] h-[48px]">Pilih</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterModal