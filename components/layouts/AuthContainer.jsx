import Image from "next/image";

import banner from "@/assets/images/auth-banner.webp";

const AuthContainer = ({ children }) => {
  return (
    <section className="flex justify-center items-center min-h-screen w-full mx-auto xs:max-w-[25rem] xl:max-w-none">
      <div className="hidden xl:block xl:flex-[50%]">
        <Image
          priority={true}
          src={banner}
          alt="Banner"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="flex-[100%] flex flex-col gap-6 px-6 xs:px-0 xl:px-[136px] xl:flex-[50%]">
        {children}
      </div>
    </section>
  )
}

export default AuthContainer;