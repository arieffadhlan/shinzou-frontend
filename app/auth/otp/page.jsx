"use client";

import Button from "@/components/Button";
import { useState } from "react";
import OtpInput from "react-otp-input";

const Otp = () => {
  const [otp, setOtp] = useState("");
  
  return (
    <section className="flex justify-center items-center min-h-screen w-full mx-auto xs:max-w-xl xl:max-w-none">
      <div className="flex flex-col gap-4 w-[576px] px-6 xs:px-0">
        <h1 className="font-bold text-2xl leading-9 text-black">
          Masukkan OTP
        </h1>
        <div className="flex flex-col justify-center items-center gap-6 py-6 mb-16">
          <div className="flex flex-col justify-center items-center gap-11">
            <p className="mb-0 text-sm text-center text-[#151515]">
              Ketik 6 digit kode yang dikirimkan ke &nbsp;
              <span className="font-bold">J*****@gmail.com</span>
            </p>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              inputType="number"
              inputStyle="input-otp"
              containerStyle="input-otp__container"
              shouldAutoFocus={true}
            />
          </div>
          <span className="text-sm text-center text-[#151515]">
            Kirim Ulang OTP dalam 60 detik
          </span>
        </div>
        <Button type="submit" size="sm" variant="primary" className="w-full">
          Simpan
        </Button>
      </div>
    </section>
  )
}

export default Otp