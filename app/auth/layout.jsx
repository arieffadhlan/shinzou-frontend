import Image from "next/image";
import banner from "@/assets/images/auth-banner.webp";

export const metadata = { 
  title: "Shinzou - Auth"
};

const AuthLayout = ({ children }) => {
  return (
    <section className="flex justify-center items-center min-h-screen w-full mx-auto xs:max-w-[25rem] xl:max-w-none">
      <div className="hidden xl:block xl:flex-[50%]">
        <Image
          src={banner}
          alt="Banner"
          className="h-screen object-cover"
        />
      </div>
      {children}
    </section>
  );
}

export default AuthLayout;