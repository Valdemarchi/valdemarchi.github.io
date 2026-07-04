"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Image, MessageSquare, Home } from "lucide-react";

export default function AdminHeader() {
  const pathname = usePathname();

  const nav = [
    { name: "Главная", href: "/admin", icon: LayoutDashboard },
    { name: "Галерея", href: "/admin/gallery", icon: Image },
    { name: "На сайт", href: "/", icon: Home },
  ];

  return (
    <header className="w-full border-b border-white/10 bg-[#0B1220]/90 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="font-bold text-white">
          ADMIN PANEL
        </div>

        {/* NAV */}
        <nav className="flex items-center gap-6">
          {nav.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 text-sm transition ${
                  active
                    ? "text-red-500"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <item.icon size={16} />
                {item.name}
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}