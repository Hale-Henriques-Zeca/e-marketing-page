import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Marketing · EdenKingDom",
  description:
    "Divisão oficial de Marketing & Campaigns da EdenKingDom Corporation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>

  <Header />

  {/* 🔥 CONTEÚDO PRINCIPAL */}
  <main className="flex-1 pt-20 relative z-10">
    {children}
  </main>

  <Footer />

</body>
    </html>
  );
}
