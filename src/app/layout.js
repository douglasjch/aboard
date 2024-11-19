import "./globals.css";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Dashboard",
  description: "nextjs app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen px-10 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
