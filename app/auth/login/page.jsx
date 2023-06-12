"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AuthContainer from "@/components/layouts/AuthContainer";
import Input from "@/components/forms/Input";
import Label from "@/components/forms/Label";
import Alert from "@/components/Alert";
import Button from "@/components/Button";

const validationSchema = yup.object().shape({
  email: yup.string().required("Email wajib diisi!"),
  password: yup.string().required("Password wajib diisi!")
});

const Login = () => {  
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    reValidateMode: "onSubmit"
  });

  const onSubmit = (formData) => {
    console.log(formData);
    reset();
  }
  
  return (
    <AuthContainer>
      <h1 className="font-bold text-2xl leading-6 text-black">
        Masuk
      </h1>
      <div className="flex flex-col gap-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label id="email">Email</Label>
            <Input
              type="email"
              variant="primary"
              name="email"
              register={register}
              errors={errors}
              validationSchema={validationSchema}
              placeholder="Contoh: johndoe@gmail.com"
              autoFocus
            />
            {errors["email"]?.message && <Alert type="error" message={errors["email"].message} />}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <Label id="password">Password</Label>
              <Link href="/auth/forgot-password" className="font-medium text-xs text-primary-4">
                Lupa Kata Sandi
              </Link>
            </div>
            <Input
              type="password"
              variant="primary"
              name="password"
              register={register}
              errors={errors}
              validationSchema={validationSchema}
              placeholder="Masukkan password"
            />
            {errors["password"]?.message && <Alert type="error" message={errors["password"].message} />}
          </div>
          <Button 
            type="submit" 
            size="md" 
            variant="primary" 
            className="w-full mt-2"
          >
            Masuk
          </Button>
        </form>
        <span className="flex justify-center items-center text-sm text-black">
          Belum punya akun? &nbsp;
          <Link href="/auth/register" className="font-bold text-primary-4">Daftar di sini</Link>
        </span>
      </div>
      <div className="Toastify__toast-auth">
        <ToastContainer />
      </div>
    </AuthContainer>
  )
}

export default Login;