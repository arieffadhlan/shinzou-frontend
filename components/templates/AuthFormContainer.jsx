import Image from "next/image";
import Link from "next/link";

import banner from "@/assets/images/auth-banner.webp";
import logo from "@/assets/icons/logo.svg";

const AuthContainer = ({ children }) => {
  return (
    <section className="flex justify-center items-center min-h-screen w-full mx-auto xs:max-w-[25rem] xl:max-w-none">
      <Link href="/" className="hidden xl:block xl:flex-[50%]">
        <Image
          src={banner}
          alt="Banner"
          priority={true}
          className="w-full h-screen object-cover"
        />
      </Link>
      <div className="flex-[100%] flex flex-col gap-6 px-6 xs:px-0 xl:px-[136px] xl:flex-[50%]">
        <Link href="/" className="flex justify-center items-center mb-6 xl:hidden xl:mb-0">
          <Image src={logo} alt="Logo" priority={true} className="w-16" />
        </Link>
        {children}
      </div>
    </section>
  )
}

export default AuthContainer;