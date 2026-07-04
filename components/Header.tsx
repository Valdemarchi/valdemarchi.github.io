"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Send } from "lucide-react";
import Container from "@/components/Container";

const navItems = [
  { title: "Услуги", href: "/services" },
  { title: "О нас", href: "/about" },
  { title: "Галерея", href: "/gallery" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0B1220]/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-28 items-center justify-between gap-6">

          {/* LOGO */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo-new2.png"
              alt="Ремонт ТНВД"
              width={500}
              height={150}
              priority
              className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] h-auto object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center whitespace-nowrap">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-medium text-gray-200 hover:text-red-500 transition"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">

            <a
              href="tel:+79822131272"
              className="flex items-center gap-2 text-sm hover:text-red-500 transition whitespace-nowrap"
            >
              <Phone size={18} />
              Позвонить
            </a>

            <a
              href="https://t.me/RemontTNVD86"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-medium hover:bg-red-700 transition"
            >
              <Send size={18} />
              Telegram
            </a>

          </div>

          {/* 🕶️ HIDDEN ADMIN LINK */}
          <Link
            href="/admin"
            className="fixed top-2 right-2 w-3 h-3 opacity-0 hover:opacity-100 bg-red-500 rounded-full transition"
            title="admin"
          />

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </Container>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-[#101827]">
          <Container>
            <div className="flex flex-col gap-6 py-6">

              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg hover:text-red-500 transition"
                >
                  {item.title}
                </Link>
              ))}

              <a href="tel:+79822131272" className="flex items-center gap-2">
                <Phone size={18} />
                Позвонить
              </a>

              <a
                href="https://t.me/RemontTNVD86"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3 hover:bg-red-700 transition"
              >
                <Send size={18} />
                Telegram
              </a>

            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}