"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AuthContainer from "@/components/layouts/AuthContainer";
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Input from "@/components/forms/Input";
import Label from "@/components/forms/Label";

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
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    reValidateMode: "onSubmit"
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  }
  
  return (
    <AuthContainer>
      <h1 className="font-bold text-2xl text-black">
        Daftar
      </h1>
      <div className="flex flex-col gap-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label id="name">Nama</Label>
            <Input
              type="text"
              variant="primary"
              name="name"
              register={register}
              errors={errors}
              validationSchema={validationSchema}
              placeholder="Nama Lengkap"
            />
            {errors["name"]?.message && <Alert type="error" message={errors["name"].message} />}
          </div>
          <div className="flex flex-col gap-1">
            <Label id="email">Email</Label>
            <Input
              type="email"
              variant="primary"
              name="email"
              register={register}
              errors={errors}
              validationSchema={validationSchema}
              placeholder="Contoh: johndee@gmail.com"
            />
            {errors["email"]?.message && <Alert type="error" message={errors["email"].message} />}
          </div>
          <div className="flex flex-col gap-1">
            <Label id="phone_number">Nomor Telepon</Label>
            <Input
              type="number"
              variant="primary"
              name="phone_number"
              register={register}
              errors={errors}
              validationSchema={validationSchema}
              placeholder="+62 ."
            />
            {errors["phone_number"]?.message && <Alert type="error" message={errors["phone_number"].message} />}
          </div>
          <div className="flex flex-col gap-1">
            <Label id="password">Buat Password</Label>
            <Input
              type="password"
              variant="primary"
              name="password"
              register={register}
              errors={errors}
              validationSchema={validationSchema}
              placeholder="Buat Password"
            />
            {errors["password"]?.message && <Alert type="error" message={errors["password"].message} />}
          </div>
          <Button 
            type="submit" 
            size="md" 
            variant="primary" 
            className="w-full mt-2"
          >
            Daftar
          </Button>
        </form>
        <span className="flex justify-center items-center text-sm text-black">
          Sudah punya akun? &nbsp;
          <Link href="/auth/login" className="font-bold text-primary-4">Masuk di sini</Link>
        </span>
      </div>
      <div className="Toastify__toast-auth">
        <ToastContainer />
      </div>
    </AuthContainer>
  )
}

export default Register;