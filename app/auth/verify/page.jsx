"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import OtpInput from "react-otp-input";
import { ToastContainer } from "react-toastify";

import { clearAuthError, clearState } from "@/redux/features/auth/authSlice";
import { verifyOTP } from "@/redux/features/auth/authAction";

import Alert from "@/components/atoms/Alert";
import Button from "@/components/atoms/Button";

const verifyAccount = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, loading, success, error } = useSelector((state) => state.auth);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (error) dispatch(clearAuthError());
  }, [error]);
  
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (success) {
        dispatch(clearState());
        router.push("/auth/login");
      }
    }, 3000);
    
    return () => clearTimeout(redirectTimer);
  }, [success]);
  
  const handleOTPChange = (otp) => {
    setOtp(otp);
  }
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(verifyOTP({ otp }));
  }
  
  return (
    <section className="flex justify-center items-center min-h-screen w-full mx-auto xs:max-w-xl xl:max-w-none">
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 w-[576px] px-6 xs:px-0">
        <h1 className="font-bold text-2xl leading-9 text-black">
          Enter OTP
        </h1>
        <div className="flex flex-col justify-center items-center gap-6 py-6 mb-16">
          <div className="flex flex-col justify-center items-center gap-11">
            <p className="mb-0 text-sm text-center text-neutral-5">
              Type in the 6 digit code that was sent to the email address you registered at registration.
            </p>
            <OtpInput
              value={otp}
              onChange={handleOTPChange}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              inputType="number"
              inputStyle="input-otp"
              containerStyle="input-otp__container"
              shouldautoFocus={true}
            />
          </div>
          <span className="text-sm text-center text-neutral-5">
            Resend OTP in 60 seconds
          </span>
        </div>
        <Button 
          type="submit" 
          size="md" 
          variant="primary" 
          className="w-full mt-2"
          loading={loading}
        >
          Continue
        </Button>
      </form>
      
      {/* Alert */}
      {success && <Alert type="success" message={user.message} />}
      {error && <Alert type="error" message={error.message} />}
      <ToastContainer />
    </section>
  )
}

export default verifyAccount;