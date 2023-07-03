"use client";

import ButtonLink from "@/components/atoms/ButtonLink";
import AccountNavigation from "@/components/organisms/AccountNavigation";
import UpdateProfileForm from "@/components/organisms/forms/UpdateProfileForm";
import Container from "@/components/templates/Container";

const Account = () => {
  return (
    <>
      <section className="shadow-xs">
        <Container htmlTag="div" className="flex flex-col gap-6 pt-[102px] pb-5 sm:pt-[132px]">
          <h1 className="font-bold text-xl">Akun</h1>
          <div className="flex flex-col items-center gap-3 w-full lg:flex-row">
            <ButtonLink
              href="/"
              size="lg"
              variant="primary"
              className="justify-start gap-3 w-full px-4 bg-primary-3 xs:gap-4.5"
            >
              <span className="material-icons-round">arrow_back</span>
              Beranda
            </ButtonLink>
          </div>
        </Container>
      </section>
      <Container className="my-[64px]">
        <div className="flex flex-col gap-6 2md:flex-row 2md:gap-9">
          <AccountNavigation />
          <UpdateProfileForm />
        </div>
      </Container>
    </>
  )
}

export default Account;