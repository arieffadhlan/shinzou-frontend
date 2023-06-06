import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = { 
  title: "Shinzou",
  description: "Final Project Binar Academy"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={poppins.className}>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}