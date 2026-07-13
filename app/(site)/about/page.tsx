import { Phone, MapPin, Clock, Wrench, Shield, Gauge } from "lucide-react";
import Image from "next/image";
import CTA from "@/components/CTA";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#0B1220] text-white">

            <div className="max-w-6xl mx-auto px-6 py-16">

                {/* TITLE + BUSINESS CARD */}
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    <div>
                        <h1 className="text-4xl font-bold">О нас</h1>

                        <p className="text-gray-400 mt-3 max-w-2xl">
                            Мы занимаемся ремонтом дизельных систем Common Rail и ТНВД.
                            Профессиональная диагностика, ремонт и гарантия на все работы.
                        </p>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src="/content.png"
                            alt="Дизель Сервис Капиталка86 — визитка"
                            width={600}
                            height={370}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                </div>

                {/* ABOUT BLOCK */}
                <div className="mt-10 grid md:grid-cols-3 gap-6">

                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                        <Wrench className="text-red-500" />
                        <h3 className="font-semibold mt-3">Ремонт</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            Полный ремонт ТНВД и Common Rail систем любой сложности.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                        <Gauge className="text-red-500" />
                        <h3 className="font-semibold mt-3">Диагностика</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            Точная компьютерная диагностика дизельных систем.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                        <Shield className="text-red-500" />
                        <h3 className="font-semibold mt-3">Гарантия</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            Даём гарантию на все выполненные работы.
                        </p>
                    </div>

                </div>

                {/* TEXT BLOCK */}
                <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h2 className="text-xl font-semibold mb-3">О компании</h2>

                    <p className="text-gray-300 leading-relaxed">
                        Мы работаем с дизельными топливными системами более 10 лет.
                        За это время выстроили точный и прозрачный процесс ремонта,
                        который позволяет быстро находить неисправности и устранять их без лишних замен деталей.
                    </p>

                    <p className="text-gray-300 mt-4 leading-relaxed">
                        Наша задача — не просто “починить”, а вернуть системе заводскую эффективность
                        с максимальной точностью и ресурсом работы.
                    </p>
                </div>

                {/* MAP */}
                <div className="mt-10 rounded-2xl overflow-hidden border border-white/10">
                    <iframe
                        src="https://yandex.com/map-widget/v1/?ll=72.578485%2C61.106028&mode=search&oid=73398760255&ol=biz&z=17.05"
                        className="w-full h-[650px]"
                        loading="lazy"
                    />
                </div>

                {/* CONTACTS */}
                <div className="mt-6 grid md:grid-cols-3 gap-6">

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <MapPin className="text-red-500" />
                        <h3 className="font-semibold mt-3">Адрес</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            Парковая улица, 26, Нефтеюганск, Ханты-Мансийский автономный округ — Югра
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <Phone className="text-red-500" />
                        <h3 className="font-semibold mt-3">Телефон</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            +7 (982) 213-12-72
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                            +7 (952) 710-76-16
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <Clock className="text-red-500" />
                        <h3 className="font-semibold mt-3">Время работы</h3>

                        <div className="text-sm text-gray-400 mt-2 space-y-1">
                            <p>Пн–Пт: 9:00 – 19:00</p>
                            <p>Сб–Вс: 10:00 – 18:00</p>
                        </div>
                    </div>

                </div>

                {/* CTA (FIXED — NO BLACK BLOCK ISSUE) */}
                <div className="mt-12">
                    <CTA />
                </div>

                {/* FOOTER */}
                <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">

                    <p>© {new Date().getFullYear()} Ремонт ТНВД и Common Rail</p>

                    <p>Нефтеюганск • Работаем ежедневно • Гарантия на ремонт</p>

                </footer>

            </div>
        </main>
    );
}