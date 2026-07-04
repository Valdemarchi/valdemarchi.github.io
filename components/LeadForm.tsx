"use client";

import { useState } from "react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const data = {
      name: form.get("name"),
      phone: form.get("phone"),
      message: form.get("message"),
    };

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">

      <input
        name="name"
        placeholder="Имя"
        className="w-full p-3 rounded bg-black/30 border border-white/10"
        required
      />

      <input
        name="phone"
        placeholder="Телефон"
        className="w-full p-3 rounded bg-black/30 border border-white/10"
        required
      />

      <textarea
        name="message"
        placeholder="Описание проблемы"
        className="w-full p-3 rounded bg-black/30 border border-white/10"
      />

      <button
        disabled={loading}
        className="w-full p-3 bg-red-600 rounded"
      >
        {loading ? "Отправка..." : "Отправить заявку"}
      </button>

      {success && (
        <p className="text-green-400">
          Заявка отправлена ✔
        </p>
      )}

    </form>
  );
}