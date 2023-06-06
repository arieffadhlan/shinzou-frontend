"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "@/components/Button";
import Input from "@/components/forms/Input";
import Label from "@/components/forms/Label";

const validationSchema = yup.object().shape({
  name: yup.string().required("Nama wajib diisi."),
  email: yup.string().email("Email tidak valid.").required("Email wajib diisi."),
  phoneNumber: yup.string().required("Nomor telepon wajib diisi."),
  password: yup.string().min(8).required("Password wajib diisi."),
});

const Register = () => {  
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
          </div>
          <div className="flex flex-col gap-1">
            <Label id="phoneNumber">Nomor Telepon</Label>
            <Input
              type="number"
              variant="primary"
              name="phoneNumber"
              register={register}
              errors={errors}
              validationSchema={validationSchema}
              placeholder="+62 ."
            />
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
          </div>
          <Button type="submit" size="sm" variant="primary" className="w-full py-3.5 mt-2 active:bg-primary5">
            Daftar
          </Button>
        </form>
        <span className="flex justify-center items-center text-sm text-black">
          Sudah punya akun? &nbsp;<a href="#" className="font-bold text-primary-4">Masuk di sini</a>
        </span>
      </div>
    </div>
  )
}

export default Register;