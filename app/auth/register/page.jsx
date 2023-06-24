"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";

import { clearState } from "@/redux/features/auth/authSlice";
import { registerUser } from "@/redux/features/auth/authAction";

import AuthFormContainer from "@/components/layouts/AuthFormContainer";
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Label from "@/components/Label";

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
  const { loading, user, error, success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (success) {
        dispatch(clearState());
        router.push("/auth/verify");
      }
    }, 3000);
    
    return () => clearTimeout(redirectTimer);
  }, [success]);

  const handleFormSubmit = (formData) => {
    dispatch(registerUser(formData));
  }
  
  return (
    <AuthFormContainer>
      <h1 className="font-bold text-2xl text-black">
        Daftar
      </h1>
      <div className="flex flex-col gap-10">
        <Form 
          validationSchema={validationSchema} 
          onSubmit={handleFormSubmit} 
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <Label id="name">Nama</Label>
            <Input type="text" variant="primary" name="name" placeholder="Nama Lengkap" autoFocus />
          </div>
          <div className="flex flex-col gap-1">
            <Label id="email">Email</Label>
            <Input type="email" variant="primary" name="email" placeholder="Contoh: johndee@gmail.com" />
          </div>
          <div className="flex flex-col gap-1">
            <Label id="phone_number">Nomor Telepon</Label>
            <Input type="number" variant="primary" name="phone_number" placeholder="+62 ." />
          </div>
          <div className="flex flex-col gap-1">
            <Label id="password">Buat Password</Label>
            <Input type="password" variant="primary" name="password" placeholder="Buat Password" />
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
            ): "Daftar"}
          </Button>
        </Form>
        <span className="flex justify-center items-center text-sm text-black">
          Sudah punya akun? &nbsp;
          <Link href="/auth/login" className="font-bold text-primary-4">Masuk di sini</Link>
        </span>
      </div>

      {/* Alert */}
      {success && <Alert type="success" message={user.message} />}
      {error && <Alert type="error" message={error.message} />}
      <div className="Toastify__toast-auth">
        <ToastContainer draggable={false} />
      </div>
    </AuthFormContainer>
  )
}

export default Register;