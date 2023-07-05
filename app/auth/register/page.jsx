"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";

import { clearAuthError, clearState } from "@/redux/features/auth/authSlice";
import { registerUser } from "@/redux/features/auth/authAction";

import Alert from "@/components/atoms/Alert";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import InputPassword from "@/components/molecules/InputPassword";
import AuthFormContainer from "@/components/templates/AuthFormContainer";
import Form from "@/components/molecules/Form";

const validationSchema = yup.object().shape({
  name: yup.string().required("Nama wajib diisi!"),
  email: yup.string()
  .required("Email wajib diisi!")
  .email("Email tidak valid!"),
  phone_number: yup.string().required("Nomor telepon wajib diisi!"),
  password: yup.string()
    .required("Password wajib diisi!")
    .min(8, "Password min 8 karakter!")
});

const Register = () => {  
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
        router.push("/auth/verify");
      }
    }, 3000);
    
    return () => clearTimeout(redirectTimer);
  }, [success]);

  const handleFormSubmit = (data) => {
    dispatch(registerUser(data));
  }
  
  return (
    <AuthFormContainer>
      <h1 className="font-bold text-2xl text-black">
        Register
      </h1>
      <div className="flex flex-col gap-10">
        <Form 
          validationSchema={validationSchema} 
          onSubmit={handleFormSubmit} 
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <Label id="name">Name</Label>
            <Input type="text" variant="primary" name="name" placeholder="Name" autoFocus />
          </div>
          <div className="flex flex-col gap-1">
            <Label id="email">Email</Label>
            <Input type="email" variant="primary" name="email" placeholder="example@gmail.com" />
          </div>
          <div className="flex flex-col gap-1">
            <Label id="phone_number">Phone Number</Label>
            <Input type="number" variant="primary" name="phone_number" placeholder="08123456789" />
          </div>
          <div className="flex flex-col gap-1">
            <Label id="password">Password</Label>
            <InputPassword variant="primary" name="password" placeholder="Password" />
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
        <span className="flex justify-center items-center text-sm text-black">
          Already have an account?&nbsp;
          <Link href="/auth/login" className="font-bold text-primary-4">
            Login
          </Link>
        </span>
      </div>

      {/* Alert */}
      {success && <Alert type="success" message={user.message} />}
      {error && <Alert type="error" message={error.message} />}
      <div className="Toastify__toast-auth">
        <ToastContainer draggable={false} />
      </div>
    </AuthFormContainer>
  )
}

export default Register;