"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";

import { clearState } from "@/redux/features/auth/authSlice";
import { resetPassword } from "@/redux/features/auth/authAction";

import AuthFormContainer from "@/components/layouts/AuthFormContainer";
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Label from "@/components/Label";

const validationSchema = yup.object().shape({
  password: yup.string()
    .required("Password wajib diisi!")
    .min(8, "Password min 8 karakter!"),
  confirmationPassword: yup.string()
    .required("Konfirmasi password wajib diisi!")
    .min(8, "Konfirmasi password min 8 karakter!")
});

const ResetPassword = ({ params }) => {  
  const { loading, user, error, success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const { token } = params;

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (success) {
        dispatch(clearState());
        router.push("/auth/login");
      }
    }, 3000);
    
    return () => clearTimeout(redirectTimer);
  }, [success]);

  const handleFormSubmit = (formData) => {
    formData.token = token;
    dispatch(resetPassword(formData));
  }
  
  return (
    <AuthFormContainer>
      <h1 className="font-bold text-2xl text-black">
        Reset Password
      </h1>
      <Form 
        validationSchema={validationSchema} 
        onSubmit={handleFormSubmit} 
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <Label id="password">Masukkan Password Baru</Label>
          <Input type="password" variant="primary" name="password" placeholder="Masukkan password baru" autoFocus />
        </div>
        <div className="flex flex-col gap-1">
          <Label id="confirmationPassword">Ulangi Password Baru</Label>
          <Input type="password" variant="primary" name="confirmationPassword" placeholder="Ulangi password baru" />
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
          ): "Simpan"}
        </Button>
      </Form>

      {/* Alert */}
      {success && <Alert type="success" message={user.message} />}
      {error && <Alert type="error" message={error.message} />}
      <div className="Toastify__toast-auth">
        <ToastContainer />
      </div>
    </AuthFormContainer>
  )
}

export default ResetPassword;