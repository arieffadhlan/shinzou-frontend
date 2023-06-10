"use client";

import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Input from "@/components/forms/Input";
import Label from "@/components/forms/Label";
import AuthContainer from "@/components/layouts/AuthContainer";

const validationSchema = yup.object().shape({
  email: yup.string()
    .required("Email wajib diisi!")
    .email("Email tidak valid!")
});

const ForgotPassword = () => {  
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

      <h1 className="font-bold text-2xl leading-6 text-black">
        Lupa Password
      </h1>
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
            placeholder="Masukkan email"
          />
          {errors["email"]?.message && <Alert type="error" message={errors["email"].message} />}
        </div>
        <Button type="submit" size="sm" variant="primary" className="w-full py-3.5 mt-2 active:bg-primary5">
          Kirim
        </Button>
      </form>
      <div className="Toastify__toast-auth">
        <ToastContainer />
      </div>
    </AuthContainer>
  )
}

export default ForgotPassword;