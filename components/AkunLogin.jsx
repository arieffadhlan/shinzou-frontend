import Image from "next/image";
import Container from "./templates/Container";
import Button from "./atoms/Button";
import ButtonLink from "./atoms/ButtonLink";

const AkunLogin = () => {
    return (
      <>
      <section className="shadow-xs">
        <Container htmlTag="div" className="flex flex-col gap-6 pt-[102px] pb-5 sm:pt-[132px]">
          <h1 className="font-bold text-xl">
            Akun
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
      <Container className="flex flex-col gap-7 mt-6 mb-16 2md:flex-row">
            <div className="flex flex-col gap-6 w-full h-fit p-6 rounded-2xl 2md:w-[268px]">
              <div className="flex flex-col gap-4">
                <div className="group cursor-pointer flex justify-between items-center pb-4 border-b border-neutral-2">
                  <div className="flex items-center gap-2">
                    <span className="material-icons-round text-purple-700">edit</span>
                    <span className="font-medium w-[156px] text-base text-neutral-5 group-hover:text-black">Ubah Profil</span>
                  </div>
                </div>
                <div className="group cursor-pointer flex justify-between items-center pb-4 border-b border-neutral-2">
                  <div className="flex items-center gap-2">
                    <span className="material-icons-round text-purple-700">settings</span>
                    <span className="font-medium w-[156px] text-base text-neutral-5 group-hover:text-black">Pengaturan Akun</span>
                  </div>
                </div>
                <div className="group cursor-pointer flex justify-between items-center pb-4 border-b border-neutral-2">
                  <div className="flex items-center gap-2">
                    <span className="material-icons-round text-purple-700">logout</span>
                    <span className="font-medium w-[156px] text-base text-neutral-5 group-hover:text-black">Keluar</span>
                  </div>
                </div>
                <span className="text-center text-xs text-neutral-3">Version 1.1.0</span>
              </div>
            </div>
          </Container>
      </>
    )
  }
  
  export default AkunLogin;