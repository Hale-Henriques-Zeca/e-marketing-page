"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    
    <header className="fixed top-0 left-0 right-0 z-50 bg-ekd-black/80 backdrop-blur border-b border-ekd-pink/20">
      <nav className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* LOGO / NOME */}

        {/* 🔹 LEFT (LOGO) */}
        <div className="flex items-center gap-3 flex-1">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/branding/e-marketing/logo.png"
              alt="E-Marketing"
              width={34}
              height={34}
              className="rounded-md"
              priority
            />
            <span className="text-lg font-bold text-blue">
              E-Marketing
            </span>
          </Link>
        </div>

        {/* 🔹 CENTER (DESKTOP MENU) */}
        <div className="hidden md:flex justify-center gap-8 text-sm flex-1">
          <Link href="/" className="hover:text-white text-Red/70">
            Início
          </Link>

          <Link href="/campaigns" className="hover:text-pink text-red/70">
            Campanhas
          </Link>

          <Link href="/infrastructure" className="hover:text-ocean text-red/70">
            Infraestruturas
          </Link>

          <Link href="/services" className="hover:text-yellow text-red/70">
            Serviços
          </Link>

          <Link href="/about" className="hover:text-white text-blue/70">
            Sobre
          </Link>
        </div>

        {/* 🔹 RIGHT */}
        <div className="flex items-center gap-3 flex-1 justify-end">

          {/* DASHBOARD (DESKTOP) */}
          <Link
            href="/dashboard"
            className="hidden md:block px-4 py-2 rounded-lg bg-pink text-black font-semibold"
          >
            Dashboard
          </Link>

          {/* MOBILE BUTTONS */}
          <div className="flex items-center gap-3 md:hidden">

            {/* 🌍 Idioma */}
            <button className="text-xs border border-white/30 px-3 py-1 rounded text-white/70">
              PT
            </button>

            {/* ☰ MENU */}
            <button
              onClick={() => setOpen(!open)}
              className="text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* 📱 MOBILE DROPDOWN */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-black border-t border-white/10 flex flex-col items-center py-6 gap-5 md:hidden z-50">

            <Link href="/" onClick={() => setOpen(false)} className="text-white/80 hover:text-blue">
              Início
            </Link>

            <Link href="/campaigns" onClick={() => setOpen(false)} className="text-white/80 hover:text-blue">
              Campanhas
            </Link>

            <Link href="/infrastructure" onClick={() => setOpen(false)} className="text-white/80 hover:text-blue">
              Infraestruturas
            </Link>

            <Link href="/services" onClick={() => setOpen(false)} className="text-white/80 hover:text-blue">
              Serviços
            </Link>

            <Link href="/about" onClick={() => setOpen(false)} className="text-white/80 hover:text-blue">
              Sobre
            </Link>

            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="mt-4 px-6 py-2 rounded-lg bg-pink text-white font-semibold"
            >
              Dashboard
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}