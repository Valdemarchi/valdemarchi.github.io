// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Дизель Сервис Капиталка86 | Нефтеюганск",
  description:
    "Диагностика и ремонт дизельных форсунок, Common Rail и ТНВД в Нефтеюганске.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-[#0B1220] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}