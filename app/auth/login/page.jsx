"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "@/components/Button";
import Input from "@/components/forms/Input";
import Label from "@/components/forms/Label";

const validationSchema = yup.object().shape({
  emailPhone: yup.string().required("Email atau nomor telepon wajib diisi."),
  password: yup.string().min(8).required("Password wajib diisi."),
});

const Login = () => {  
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  }
  
  return (
    <div className="flex-[100%] flex flex-col gap-6 px-6 xs:px-0 xl:px-[136px] xl:flex-[50%]">
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
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <Label id="password">Password</Label>
              <a href="#" className="font-medium text-xs leading-[18px] text-primary-4">
                Lupa Kata Sandi
              </a>
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
          </div>
          <Button type="submit" size="sm" variant="primary" className="w-full py-3.5 mt-2 active:bg-primary5">
            Masuk
          </Button>
        </form>
        <span className="flex justify-center items-center text-sm text-black">
          Belum punya akun? &nbsp;<a href="#" className="font-bold text-primary-4">Daftar di sini</a>
        </span>
      </div>
    </div>
  )
}

export default Login;