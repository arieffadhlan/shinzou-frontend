"use client";

import { Suspense } from "react";
import { Poppins } from "next/font/google";
import Provider from "@/redux/provider";
import dayjs from "dayjs";

import "dayjs/locale/id"
import "./globals.css";

import PrivateRoute from "@/components/templates/PrivateRoute";
import Loading from "./loading";

dayjs.locale("id");

const poppins = Poppins({ 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = { 
  title: "Shinzou",
  description: "Final Project Binar Academy"
};

const RootLayout = ({ children }) => {
  const protectedRoutes = [
    "/account",
    "/checkout",
    "/notifications",
    "/order-history",
    "/payment",
  ];
  
  return (
    <html lang="id" className={poppins.className}>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
      </head>
      <body>
        <Provider>
          <PrivateRoute protectedRoutes={protectedRoutes}>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </PrivateRoute>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;