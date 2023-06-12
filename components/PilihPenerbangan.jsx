import Container from "@/components/layouts/Container";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";

const PilihPenerbangan = () => {
    return (
      <section className="shadow-xs">
        <Container htmlTag="div" className="flex flex-col gap-6 pt-[132px] pb-5">
          <h1 className="font-bold text-xl">
            Detail Penerbangan
          </h1>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-3 w-full lg:flex-row">
              <ButtonLink 
                href="/" 
                size="md" 
                variant="primary" 
                className="flex-[65%] justify-start gap-3 w-full px-4 bg-primary-3 xs:gap-4.5 lg:w-auto xl:flex-[75%]"
              >
                <span className="material-icons-round">arrow_back</span>
                JKT &gt; MLB  - 2 Penumpang - Economy
              </ButtonLink>
              <Button 
                size="md" 
                variant="success" 
                className="flex-[35%] w-full font-bold lg:w-auto xl:flex-[25%]"
              >
                Ubah Pencarian
              </Button>
            </div>
            <div className="snap-x overflow-scroll no-scrollbar flex items-center gap-2">
              <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
                <span className="font-bold text-sm text-neutral-5 group-hover:text-neutral-1">Selasa</span>
                <span className="font-medium text-xs text-neutral-3 group-hover:text-neutral-1">01/03/2023</span>
              </div>
              <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
              <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
                <span className="font-bold text-sm text-neutral-5 group-hover:text-neutral-1">Rabu</span>
                <span className="font-medium text-xs text-neutral-3 group-hover:text-neutral-1">02/03/2023</span>
              </div>
              <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
              <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
                <span className="font-bold text-sm text-neutral-5 group-hover:text-neutral-1">Kamis</span>
                <span className="font-medium text-xs text-neutral-3 group-hover:text-neutral-1">03/03/2023</span>
              </div>
              <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
              <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
                <span className="font-bold text-sm text-neutral-5 group-hover:text-neutral-1">Jumat</span>
                <span className="font-medium text-xs text-neutral-3 group-hover:text-neutral-1">04/03/2023</span>
              </div>
              <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
              <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
                <span className="font-bold text-sm text-neutral-5 group-hover:text-neutral-1">Sabtu</span>
                <span className="font-medium text-xs text-neutral-3 group-hover:text-neutral-1">05/03/2023</span>
              </div>
              <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
              <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
                <span className="font-bold text-sm text-neutral-5 group-hover:text-neutral-1">Minggu</span>
                <span className="font-medium text-xs text-neutral-3 group-hover:text-neutral-1">06/03/2023</span>
              </div>
              <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
              <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
                <span className="font-bold text-sm text-neutral-5 group-hover:text-neutral-1">Senin</span>
                <span className="font-medium text-xs text-neutral-3 group-hover:text-neutral-1">07/03/2023</span>
              </div>
              <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
              <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
                <span className="font-bold text-sm text-neutral-5 group-hover:text-neutral-1">Selasa</span>
                <span className="font-medium text-xs text-neutral-3 group-hover:text-neutral-1">08/03/2023</span>
              </div>
              <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
              <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
                <span className="font-bold text-sm text-neutral-5 group-hover:text-neutral-1">Rabu</span>
                <span className="font-medium text-xs text-neutral-3 group-hover:text-neutral-1">09/03/2023</span>
              </div>
              <div className="w-[1px] h-6 bg-[#D0D0D0]">&nbsp;</div>
              <div className="snap-center group cursor-pointer flex flex-col justify-center items-center px-4 py-1 rounded-lg hocus:bg-primary-3 active:bg-primary-4">
                <span className="font-bold text-sm text-neutral-5 group-hover:text-neutral-1">Kamis</span>
                <span className="font-medium text-xs text-neutral-3 group-hover:text-neutral-1">10/03/2023</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
  }
  
  export default PilihPenerbangan;