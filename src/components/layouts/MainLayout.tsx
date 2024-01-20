import React from "react";
import Navbar from "./Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`${inter.className} h-screen w-full flex flex-col bg-[#F8F8F8]`}>
      <Navbar />
      {children}
    </main>
  );
}