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

const RootLayout = ({ children }) => {
  const protectedRoutes = [
    "/account",
    "/checkout",
    "/notifications",
    "/order-history",
    "/payment",
  ];
  
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Shinzou Team" />
        <meta name="description" content="E-Flight Ticket: Shinzou" />
        <meta name="keyword" content="Shinzou, shinzou, tiket pesawat, pemesanan tiket pesawat" />
        <title>Shinzou</title>
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