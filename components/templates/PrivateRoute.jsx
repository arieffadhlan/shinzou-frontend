"use client";

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react';

const PrivateRoute = ({ protectedRoutes, children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const token = localStorage.getItem("token");
  const authIsProtected = pathname.split("/").indexOf("auth") !== -1;
  const pathIsProtected = protectedRoutes.indexOf(pathname) !== -1;

  useEffect(() => {
    if (token && authIsProtected) {
      router.push("/");
    }

    if (!token && pathIsProtected) {
      router.push("/auth/login");
    }
  }, [token]);
  
  return children;
}

export default PrivateRoute;