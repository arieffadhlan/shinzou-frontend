"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "@/components/Button";
import Input from "@/components/forms/Input";
import Label from "@/components/forms/Label";

const validationSchema = yup.object().shape({
  password: yup.string().min(8).required("Password wajib diisi."),
  confirmationPassword: yup.string().min(8).required("Konfirmasi password wajib diisi."),
});

const ResetPassword = () => {  
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
        Reset Password
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Label id="password">Masukkan Password Baru</Label>
          <Input
            type="password"
            variant="primary"
            name="password"
            register={register}
            errors={errors}
            validationSchema={validationSchema}
            placeholder="Masukkan password baru"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label id="confirmationPassword">Ulangi Password Baru</Label>
          <Input
            type="password"
            variant="primary"
            name="confirmationPassword"
            register={register}
            errors={errors}
            validationSchema={validationSchema}
            placeholder="Ulangi password baru"
          />
        </div>
        <Button type="submit" size="sm" variant="primary" className="w-full py-3.5 mt-2 active:bg-primary5">
          Simpan
        </Button>
      </form>
    </div>
  )
}

export default ResetPassword;