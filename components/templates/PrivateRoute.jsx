"use client";

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation'
import PageLoading from './PageLoading';

const PrivateRoute = ({ protectedRoutes, children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem("token");
  const authIsProtected = pathname.split("/").indexOf("auth") !== -1;
  const pathIsProtected = protectedRoutes.indexOf(pathname) !== -1;
  
  useEffect(() => {
    if (!isLoading && !token && pathIsProtected) {
      router.push("/auth/login");
    }
    
    if (!isLoading && token && authIsProtected) {
      router.back();
    }

    setIsLoading(false);
  }, [isLoading, token, authIsProtected, pathIsProtected]);

  if ((isLoading || !token) && pathIsProtected) {
    return <PageLoading />
  }

  if ((isLoading || token) && authIsProtected) {
    return <PageLoading />
  }
  
  return children;
}

export default PrivateRoute;