"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";

import { clearAuthError, clearState } from "@/redux/features/auth/authSlice";
import { forgotPassword } from "@/redux/features/auth/authAction";

import Alert from "@/components/atoms/Alert";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import AuthFormContainer from "@/components/templates/AuthFormContainer";
import Form from "@/components/molecules/Form";

const validationSchema = yup.object().shape({
  email: yup.string()
    .required("Email wajib diisi!")
    .email("Email tidak valid!")
});

const ForgotPassword = () => {  
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, loading, success, error } = useSelector((state) => state.auth);

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

  const handleFormSubmit = (data) => {
    dispatch(forgotPassword(data));
  }
  
  return (
    <AuthFormContainer>
      <h1 className="font-bold text-2xl text-black">
        Forgot Password
      </h1>
      <Form 
        validationSchema={validationSchema} 
        onSubmit={handleFormSubmit} 
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <Label id="email">Email</Label>
          <Input type="email" variant="primary" name="email" placeholder="Your email" autoFocus />
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
      </Form>

      {/* Alert */}
      {success && <Alert type="success" message={user.message} />}
      {error && <Alert type="error" message={error.message} />}
      <div className="Toastify__toast-auth">
        <ToastContainer />
      </div>
    </AuthFormContainer>
  )
}

export default ForgotPassword;