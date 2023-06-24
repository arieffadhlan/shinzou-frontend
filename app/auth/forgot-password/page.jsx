"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";

import { clearState } from "@/redux/features/auth/authSlice";
import { forgotPassword } from "@/redux/features/auth/authAction";

import AuthFormContainer from "@/components/layouts/AuthFormContainer";
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Label from "@/components/Label";

const validationSchema = yup.object().shape({
  email: yup.string()
    .required("Email wajib diisi!")
    .email("Email tidak valid!")
});

const ForgotPassword = () => {  
  const { loading, user, error, success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (success) {
        dispatch(clearState());
        router.push("/auth/login");
      }
    }, 3000);
    
    return () => clearTimeout(redirectTimer);
  }, [success]);

  const handleFormSubmit = (formData) => {
    dispatch(forgotPassword(formData));
  }
  
  return (
    <AuthFormContainer>
      <h1 className="font-bold text-2xl text-black">
        Lupa Password
      </h1>
      <Form 
        validationSchema={validationSchema} 
        onSubmit={handleFormSubmit} 
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <Label id="email">Email</Label>
          <Input type="email" variant="primary" name="email" placeholder="Masukkan email" autoFocus />
        </div>
        <Button 
          type="submit" 
          size="md" 
          variant="primary" 
          className="w-full mt-2"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-spin material-icons-round">autorenew</span>
          ): "Kirim"}
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