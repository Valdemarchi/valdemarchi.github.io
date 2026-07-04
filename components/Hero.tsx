"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Phone,
  Send,
  CheckCircle,
  ShieldCheck,
  Timer,
  Award,
} from "lucide-react";

const images = ["/rail.jpeg", "/rail2.jpeg", "/rail3.jpeg"];

const brands = [
  { name: "Bosch", logo: "/brands/bosch.png" },
  { name: "Delphi", logo: "/brands/delphi.png" },
  { name: "Siemens", logo: "/brands/siemens.svg" },
  { name: "Denso", logo: "/brands/denso.png" },
];

const services = [
  "Диагностика ТНВД",
  "Ремонт Common Rail",
  "Проверка форсунок",
  "Настройка системы",
];

const why = [
  {
    title: "Точная диагностика",
    desc: "Без лишней замены деталей",
    icon: CheckCircle,
  },
  {
    title: "Гарантия",
    desc: "На все виды работ",
    icon: ShieldCheck,
  },
  {
    title: "Сроки",
    desc: "Минимальный простой авто",
    icon: Timer,
  },
  {
    title: "Опыт 10+ лет",
    desc: "Bosch / Delphi / Siemens",
    icon: Award,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setPrevIndex(index);
        setIndex((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 400);
    }, 3500);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0B1220] text-white overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 bg-[#0B1220]" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-[#0B1220]" />

      {/* glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />

      <Container>

        {/* HERO TOP */}
        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left">

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Дизель Сервис <span className="text-red-500">Капиталка86</span>
            </h1>

            <p className="mt-6 text-gray-200 text-lg md:text-xl">
              Профессиональный ремонт дизельных топливных систем
            </p>

            {/* SERVICES */}
            <div className="mt-6 grid grid-cols-2 gap-2 text-sm">
              {services.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300"
                >
                  <span className="text-red-500">✔</span>
                  {s}
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              <a
                href="tel:+79822131272<br>+79527107616"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-medium"
              >
                <Phone size={18} />
                Позвонить
              </a>

              <a
                href="https://t.me/RemontTNVD86"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
              >
                <Send size={18} />
                Telegram
              </a>

            </div>

          </div>

          {/* SLIDER */}
          <div className="hidden md:flex justify-center">

            <div className="relative w-[420px] h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-blue-600/10 z-10" />

              <Image
                src={images[prevIndex]}
                alt="service"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className={`object-cover transition-opacity duration-700 ${fade ? "opacity-100 scale-95" : "opacity-0 scale-95"
                  }`}
              />

              <Image
                src={images[index]}
                alt="service"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className={`object-cover transition-opacity duration-700 ${fade ? "opacity-0 scale-95" : "opacity-100 scale-95"
                  }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            </div>

          </div>

        </div>

        {/* WHY US */}
        <div className="mt-16 relative">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-md">

            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold">
                Почему выбирают нас
              </h2>
              <p className="text-gray-400 mt-2">
                Надёжность, опыт и точность диагностики
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {why.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-6 hover:border-red-500/30 transition"
                  >
                    <Icon className="text-red-500 mb-3" size={26} />

                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-400 mt-1">
                      {item.desc}
                    </p>
                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* BRANDS (UPDATED PREMIUM STYLE) */}
        <div className="mt-20">

          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold">
              Работаем с оборудованием ведущих производителей
            </h3>

            <p className="text-gray-400 mt-3 text-lg">
              Bosch • Delphi • Siemens • Denso
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {brands.map((brand) => (
              <div
                key={brand.name}
                className="
          h-36
          rounded-3xl
          bg-white/5
          border border-white/10
          backdrop-blur-md

          flex items-center justify-center

          shadow-lg
          transition-all duration-300

          hover:-translate-y-2
          hover:border-red-500/50
          hover:bg-white/10
        "
              >

                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={160}
                  height={60}
                  className="
            object-contain
            max-h-14
            w-auto
            opacity-80
            hover:opacity-100
            transition
          "
                />

              </div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}