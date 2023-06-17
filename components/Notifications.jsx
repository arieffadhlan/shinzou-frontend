import Container from "./layouts/Container";
import ButtonLink from "./ButtonLink";

const Notifications= () => {
    return (
      <>
      <section className="shadow-xs">
        <Container htmlTag="div" className="flex flex-col gap-6 pt-[132px] pb-5">
          <h1 className="font-bold text-xl">
            Notifikasi
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
                Beranda
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <Container htmlTag="div" className="flex flex-col gap-2 pt-[45px] pb-5">
        <div className="flex justify-between gap-1 py-2 border-b border-neutral-2">
          <div className="flex gap-1">
          <span className="material-icons-round text-purple-400">circle_notifications</span>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-neutral-3">Promosi</span>
                <span className="text-base text-neutral-5">Dapatkan Potongan 50% Tiket!</span>
                <span className="text-sm text-neutral-3">Syarat dan Ketentuan berlaku!</span>
              </div>
            </div>
            <div className="flex items-center gap-1"></div>
              <span className="text-sm text-neutral-3">20 Maret, 14:04</span>
              <div class="w-[8px] h-[8px] rounded-full bg-lime-500"></div>
          </div>
          <div className="flex justify-between gap-1 py-2">
          <div className="flex gap-1">
          <span className="material-icons-round text-purple-400">circle_notifications</span>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-neutral-3">Notifikasi</span>
                <span className="text-base text-neutral-5">Terdapat perubahan pada jadwal penerbangan kode booking 45GT6. Cek jadwal perjalanan Anda disini!</span>
              </div>
            </div>
          <div className="flex gap-1 "></div>
            <span className="text-sm text-neutral-3">5 Maret, 14:04</span>
            <div class="w-[8px] h-[8px] rounded-full  bg-rose-500"></div>
        </div>
      </Container>
      </>
    )
  }
  
  export default Notifications;