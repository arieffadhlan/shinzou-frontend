"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";

import { clearState } from "@/redux/features/auth/authSlice";

import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
import Form from "@/components/molecules/Form";
import { updateProfile } from "@/redux/features/auth/authAction";

const validationSchema = yup.object().shape({
  name: yup.string().required("Nama wajib diisi!"),
  phone_number: yup.string().required("Nomor telepon wajib diisi!")
});

const UpdateProfileForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, loading, success } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (success) {
      dispatch(clearState());
      router.refresh();
    }
  }, [success]);

  const handleFormSubmit = (data) => {
    data.id = user.data.id;
    dispatch(updateProfile(data));
  }
  
	return (
    <div className="flex flex-[60%] flex-col gap-4">
      <h2 className="font-bold text-xl">
        Ubah Data Profil
      </h2>
      <div className="flex flex-col bg-neutral-1 border border-neutral-2 rounded-lg shadow-2xs">
        <div className="flex justify-center items-center px-4 py-2 rounded-t-lg bg-primary-4">
          <span className="font-medium text-base text-neutral-1">
            Data Diri
          </span>
        </div>
        <Form 
          validationSchema={validationSchema} 
          initialValues={{
            name: user?.data?.name ?? "",
            phone_number: user?.data?.phone_number ?? ""
          }}
          onSubmit={handleFormSubmit} 
          className="flex flex-col gap-4 p-4"
        >
          <div className="flex flex-col gap-1">
            <Label id="name" className="font-medium text-sm">Nama Lengkap</Label>
            <Input type="text" variant="secondary" name="name" placeholder="Nama lengkap" />
          </div>
          <div className="flex flex-col gap-1">
            <Label id="email" className="font-medium text-sm">Email</Label>
            <Input type="email" variant="secondary" name="email" value={user?.data?.email ?? ""} placeholder="Contoh: johndee@gmail.com" readOnly disabled />
          </div>
          <div className="flex flex-col gap-1">
            <Label id="phone_number" className="font-medium text-sm">Nomor Telepon</Label>
            <Input type="number" variant="secondary" name="phone_number" placeholder="+62 ." />
          </div>
          <Button 
            type="submit" 
            size="md" 
            variant="primary" 
            className="w-full mt-4"
            loading={loading}
          >
            Simpan
          </Button>
        </Form>
      </div>

      <div className="Toastify__toast-auth">
        <ToastContainer />
      </div>
    </div>
  );
}

export default UpdateProfileForm;