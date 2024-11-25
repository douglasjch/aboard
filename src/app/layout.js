import "./globals.css";
import { Inter } from "next/font/google"
import 'dotenv/config'

const inter = Inter({ subsets: ['latin'] })
require('dotenv').config()
      //  console.log(process.env) // remove this after you've confirmed it is

export const metadata = {
  title: "Dashboard",
  description: "nextjs app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen px-10 antialiased`}>

        


        {children}
      </body>
    </html>
  );
}
