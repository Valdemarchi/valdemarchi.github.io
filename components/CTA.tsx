"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CTA() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setLoading(false);

      if (res.ok) {
        setSuccess(true);

        setFormData({
          name: "",
          phone: "",
          message: "",
        });

        setTimeout(() => setSuccess(false), 4000);
      }
    } catch (err) {
      console.error("CTA error:", err);
      setLoading(false);
    }
  }

  return (
    <section className="py-20 text-white">
      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 text-center shadow-lg"
        >

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold">
            Ремонт дизельной системы
          </h2>

          <p className="mt-3 text-gray-400">
            Оставьте заявку — мы перезвоним и скажем стоимость
          </p>

          {/* FORM */}
          <form onSubmit={onSubmit} className="mt-8 space-y-4 max-w-md mx-auto">

            <input
              placeholder="Имя"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-red-500 outline-none"
              required
            />

            <input
              placeholder="Телефон"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-red-500 outline-none"
              required
            />

            <textarea
              placeholder="Комментарий (необязательно)"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:border-red-500 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl font-medium disabled:opacity-60"
            >
              {loading ? "Отправка..." : "Оставить заявку"}
            </button>

            {success && (
              <p className="text-green-400 text-sm">
                Заявка отправлена ✔
              </p>
            )}
          </form>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="tel:+79822131272"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition"
            >
              <Phone size={18} />
              Позвонить
            </a>

            <a
              href="https://t.me/RemontTNVD86"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition"
            >
              <MessageCircle size={18} />
              Telegram
            </a>

          </div>

          {/* FOOTNOTE */}
          <p className="mt-6 text-sm text-gray-500">
            Работаем ежедневно • Быстрая диагностика • Гарантия
          </p>

        </motion.div>

      </div>
    </section>
  );
}