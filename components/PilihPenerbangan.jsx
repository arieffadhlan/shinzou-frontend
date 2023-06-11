import Container from "@/components/layouts/Container";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";

const PilihPenerbangan = () => {
    return (
      <Container className="flex flex-col gap-6 pt-[132px] pb-5 shadow-xs">
        <h1 className="font-bold text-xl leading-[30px]">
          Detail Penerbangan
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3 w-full 2md:flex-row">
            <ButtonLink 
              href="/" 
              size="md" 
              variant="primary" 
              className="flex-[65%] !justify-start gap-3 w-full bg-primary-3 xs:gap-4.5 2md:w-auto xl:flex-[75%]"
            >
              <span className="material-icons-round">arrow_back</span>
              JKT &gt; MLB  - 2 Penumpang - Economy
            </ButtonLink>
            <Button 
              size="md" 
              variant="success" 
              className="flex-[35%] w-full !font-bold 2md:w-auto xl:flex-[25%]"
            >
              Ubah Pencarian
            </Button>
          </div>
          <div className="snap-x overflow-scroll no-scrollbar flex items-center gap-2">
            <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Selasa</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">01/03/2023</span>
            </div>
            <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
            <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Rabu</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">02/03/2023</span>
            </div>
            <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
            <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Kamis</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">03/03/2023</span>
            </div>
            <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
            <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Jumat</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">04/03/2023</span>
            </div>
            <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
            <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Sabtu</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">05/03/2023</span>
            </div>
            <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
            <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Minggu</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">06/03/2023</span>
            </div>
            <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
            <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Senin</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">07/03/2023</span>
            </div>
            <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
            <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Selasa</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">08/03/2023</span>
            </div>
            <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
            <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Rabu</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">09/03/2023</span>
            </div>
            <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
            <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
              <span className="font-bold text-sm text-[#151515] group-hover:text-white">Kamis</span>
              <span className="font-medium text-xs leading-[18px] text-[#8A8A8A] group-hover:text-white">10/03/2023</span>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  
  export default PilihPenerbangan;