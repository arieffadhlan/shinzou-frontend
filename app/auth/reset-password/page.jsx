"use client";

import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Input from "@/components/forms/Input";
import Label from "@/components/forms/Label";

const validationSchema = yup.object().shape({
  password: yup.string()
    .required("Password wajib diisi!")
    .min(8, "Password min 8 karakter!"),
  confirmationPassword: yup.string()
    .required("Konfirmasi password wajib diisi!")
    .min(8, "Konfirmasi password min 8 karakter!")
});

const ResetPassword = () => {  
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
    <>
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
          {errors["password"]?.message && <Alert type="error" message={errors["password"].message} />}
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
          {errors["confirmationPassword"]?.message && <Alert type="error" message={errors["confirmationPassword"].message} />}
        </div>
        <Button type="submit" size="sm" variant="primary" className="w-full py-3.5 mt-2 active:bg-primary5">
          Simpan
        </Button>
      </form>
      <div className="Toastify__toast-auth">
        <ToastContainer />
      </div>
    </>
  )
}

export default ResetPassword;