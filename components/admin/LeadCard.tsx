"use client";

import { useRouter } from "next/navigation";
import { Phone, Trash2 } from "lucide-react";
import { useState } from "react";

export default function LeadCard({ lead }: any) {
  const router = useRouter();

  const [status, setStatus] = useState(lead.status || "new");

  async function changeStatus(value: string) {
    setStatus(value);

    await fetch("/api/lead/status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: lead.id,
        status: value,
      }),
    });

    router.refresh();
  }

  async function deleteLead() {
    if (!confirm("Удалить заявку?")) return;

    await fetch("/api/lead/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: lead.id,
      }),
    });

    router.refresh();
  }

  const statusConfig: any = {
    new: {
      label: "🔴 Новая",
      color: "bg-red-500/20 text-red-400 border-red-500/30",
    },
    processing: {
      label: "🟡 В работе",
      color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    },
    done: {
      label: "🟢 Завершена",
      color: "bg-green-500/20 text-green-400 border-green-500/30",
    },
    cancel: {
      label: "⚫ Отменена",
      color: "bg-gray-500/20 text-gray-300 border-gray-500/30",
    },
  };

  const current = statusConfig[status] || statusConfig.new;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">

      <div className="flex justify-between items-start gap-6">

        {/* LEFT */}
        <div className="flex-1">

          <h2 className="text-xl font-bold">
            {lead.name}
          </h2>

          <p className="mt-2 text-gray-400">
            📞 {lead.phone}
          </p>

          {lead.message && (
            <p className="mt-4 text-gray-300 whitespace-pre-wrap">
              💬 {lead.message}
            </p>
          )}

          <p className="mt-5 text-xs text-gray-500">
            {new Date(lead.created_at).toLocaleString("ru-RU")}
          </p>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-end gap-3">

          {/* STATUS SELECT (единый стиль) */}
          <select
            value={status}
            onChange={(e) => changeStatus(e.target.value)}
            className="
              rounded-xl
              border border-white/10
              bg-[#0B1220]
              text-white
              px-3 py-2
              text-sm
              outline-none
              focus:border-red-500
              transition
              cursor-pointer
            "
          >
            <option value="new">Новая</option>
            <option value="processing">В работе</option>
            <option value="done">Завершена</option>
            <option value="cancel">Отменена</option>
          </select>

          {/* BADGE */}
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium border ${current.color}`}
          >
            {current.label}
          </span>

        </div>

      </div>

      {/* ACTIONS */}
      <div className="flex gap-3 mt-6">

        <a
          href={`tel:${lead.phone}`}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition"
        >
          <Phone size={18} />
          Позвонить
        </a>

        <button
          onClick={deleteLead}
          className="ml-auto flex items-center gap-2 px-4 py-2 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition"
        >
          <Trash2 size={18} />
          Удалить
        </button>

      </div>

    </div>
  );
}