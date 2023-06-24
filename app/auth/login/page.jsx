"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";

import { clearState } from "@/redux/features/auth/authSlice";
import { loginUser } from "@/redux/features/auth/authAction"

import AuthFormContainer from "@/components/layouts/AuthFormContainer";
import Input from "@/components/forms/Input";
import Label from "@/components/forms/Label";
import Form from "@/components/forms/Form";
import Alert from "@/components/Alert";
import Button from "@/components/Button";

const validationSchema = yup.object().shape({
  email: yup.string().required("Email wajib diisi!"),
  password: yup.string().required("Password wajib diisi!")
});

const Login = () => {  
  const { loading, user, error, success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (success) {
        dispatch(clearState());
        router.push("/");
      }
    }, 3000);
    
    return () => clearTimeout(redirectTimer);
  }, [success]);

  const handleFormSubmit = (formData) => {
    dispatch(loginUser(formData));
  }
  
  return (
    <AuthFormContainer>
      <h1 className="font-bold text-2xl leading-6 text-black">
        Masuk
      </h1>
      <div className="flex flex-col gap-10">
        <Form 
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit} 
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <Label id="email">Email</Label>
            <Input type="email" variant="primary" name="email" placeholder="Contoh: johndoe@gmail.com" autoFocus />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <Label id="password">Password</Label>
              <Link href="/auth/forgot-password" className="font-medium text-xs text-primary-4">
                Lupa Kata Sandi
              </Link>
            </div>
            <Input type="password" variant="primary" name="password" placeholder="Masukkan password" />
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
            ): "Masuk"}
          </Button>
        </Form>
        <span className="flex justify-center items-center text-sm text-black">
          Belum punya akun? &nbsp;
          <Link href="/auth/register" className="font-bold text-primary-4">Daftar di sini</Link>
        </span>
      </div>

      {/* Alert */}
      {success && <Alert type="success" message={user.message} />}
      {error && <Alert type="error" message={error.message} />}
      <div className="Toastify__toast-auth">
        <ToastContainer />
      </div>
    </AuthFormContainer>
  )
}

export default Login;