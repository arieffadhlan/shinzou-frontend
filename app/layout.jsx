"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import { wrapper } from "@/redux/store";
import Provider from "@/redux/provider";

const poppins = Poppins({ 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = { 
  title: "Shinzou",
  description: "Final Project Binar Academy"
};

const RootLayout = ({ children }) => {
  return (
    <html lang="id" className={poppins.className}>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
      </head>
      <body>
        <Provider>
          {children}
        </Provider>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" defer></script>
      </body>
    </html>
  )
}

export default RootLayout;