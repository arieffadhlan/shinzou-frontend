"use client";

import { logout } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const AccountNavigation = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/auth/login");
  }
  
  return (
    <div className="flex flex-[40%] flex-col h-fit p-6 border border-neutral-2 rounded-lg bg-neutral-1 shadow-2xs">
      <div className="flex items-center gap-4 pb-4 border-b border-neutral-2">
        <span className="material-icons-round text-primary-4">edit</span>
        <span className="font-medium text-base text-neutral-5">Ubah Profil</span>
      </div>
      <button type="button" onClick={handleLogout} className="flex items-center gap-4 pt-4">
        <span className="material-icons-round text-primary-4">logout</span>
        <span className="font-medium text-base text-neutral-5">Keluar</span>
      </button>
    </div>
  )
}
  
export default AccountNavigation;