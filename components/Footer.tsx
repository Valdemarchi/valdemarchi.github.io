import Container from "@/components/Container";
import Link from "next/link";
import { Phone, Send, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080B12]">
      <Container>
        <div className="py-16 grid gap-12 md:grid-cols-4">

          {/* Логотип */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Дизель Сервис Капиталка86
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Профессиональный ремонт ТНВД, форсунок и систем
              Common Rail с гарантией качества.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Навигация
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <Link href="/">
                Главная
              </Link>

              <Link href="/services">
                Услуги
              </Link>

              <Link href="/prices">
                Цены
              </Link>

              <Link href="/contacts">
                Контакты
              </Link>

            </div>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Контакты
            </h3>

            <div className="space-y-4 text-gray-400">

              <a
                href="tel:+79822131272"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Phone size={18} className="text-red-500" />
                +7 (982) 213-12-72
              </a>

              <a
                href="tel:+79527107616"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Phone size={18} className="text-red-500" />
                +7 (952) 710-76-16
              </a>

              <a
                href="https://t.me/RemontTNVD86"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Send size={18} className="text-red-500" />
                Telegram
              </a>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-red-500" />
                Парковая улица, 26, Нефтеюганск, Ханты-Мансийский автономный округ — Югра
              </div>

            </div>
          </div>

          {/* Режим работы */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Режим работы
            </h3>

            <div className="flex items-start gap-3 text-gray-400">

              <Clock size={18} className="mt-1 text-red-500" />

              <div>
                <p>Пн – Пт: 09:00 – 19:00</p>
                <p>Сб-Вс: 10:00 – 18:00</p>
              </div>

            </div>

            <a
              href="tel:+79822131272"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 font-medium hover:bg-red-700 transition"
            >
              Записаться
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Дизель Сервис Капиталка86. Все права защищены.
          </p>

          <p className="mt-3 md:mt-0">
            Ремонт ТНВД • Common Rail • Форсунки
          </p>

        </div>
      </Container>
    </footer>
  );
}