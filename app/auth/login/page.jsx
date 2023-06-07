"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Input from "@/components/forms/Input";
import Label from "@/components/forms/Label";

const validationSchema = yup.object().shape({
  emailPhone: yup.string().required("Email atau nomor telepon wajib diisi!"),
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
    <>
      <h1 className="font-bold text-2xl leading-6 text-black">
        Masuk
      </h1>
      <div className="flex flex-col gap-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label id="emailPhone">Email/No Telepon</Label>
            <Input
              type="text"
              variant="primary"
              name="emailPhone"
              register={register}
              errors={errors}
              validationSchema={validationSchema}
              placeholder="Contoh: johndoe@gmail.com"
              autoFocus
            />
            {errors["emailPhone"]?.message && <Alert type="error" message={errors["emailPhone"].message} />}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <Label id="password">Password</Label>
              <Link href="/auth/forgot-password" className="font-medium text-xs leading-[18px] text-primary-4">
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
          <Button type="submit" size="sm" variant="primary" className="w-full py-3.5 mt-2 active:bg-primary5">
            Masuk
          </Button>
        </form>
        <span className="flex justify-center items-center text-sm text-black">
          Belum punya akun? &nbsp;<Link href="/auth/register" className="font-bold text-primary-4">Daftar di sini</Link>
        </span>
        <div className="Toastify__toast-auth">
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default Login;