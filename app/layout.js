import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TASST Family",
  description: "Wesbite for the TASST family",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><NavBar />{children}</body>

    </html>
  );
}
