"use client";

import { useState } from "react";

export default function GalleryItem({ item }: any) {
  const [loading, setLoading] = useState(false);

  // EDIT STATE
  const [editOpen, setEditOpen] = useState(false);
  const [title, setTitle] = useState(item.title || "");
  const [comment, setComment] = useState(item.comment || "");

  async function handleDelete() {
    setLoading(true);

    await fetch("/api/gallery/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: item.id,
        filePath: item.file_path,
      }),
    });

    window.location.reload();
  }

  async function handleUpdate() {
    setLoading(true);

    await fetch("/api/gallery/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: item.id,
        title,
        comment,
      }),
    });

    setLoading(false);
    setEditOpen(false);
    window.location.reload();
  }

  return (
    <>
      <div className="relative rounded-xl border border-white/10 bg-white/5 overflow-hidden group">

        {/* MEDIA */}
        {item.media_type === "image" ? (
          <img src={item.media_url} className="w-full h-52 object-cover" />
        ) : (
          <video src={item.media_url} controls className="w-full h-52 object-cover" />
        )}

        {/* BUTTONS */}
        <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100">

          <button
            onClick={() => setEditOpen(true)}
            className="bg-yellow-500 text-black text-xs px-3 py-1 rounded"
          >
            ✏️
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-600 text-xs px-3 py-1 rounded"
          >
            🗑
          </button>

        </div>

        <div className="p-3">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-400">{item.comment}</p>
        </div>

      </div>

      {/* MODAL EDIT */}
      {editOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setEditOpen(false)}
        >
          <div
            className="bg-[#0B1220] border border-white/10 p-6 rounded-xl w-[400px]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-4">Редактирование</h2>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mb-3 p-2 bg-black/40 border border-white/10 rounded"
              placeholder="Название"
            />

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full mb-4 p-2 bg-black/40 border border-white/10 rounded"
              placeholder="Комментарий"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditOpen(false)}
                className="px-3 py-1 text-sm border border-white/20 rounded"
              >
                Отмена
              </button>

              <button
                onClick={handleUpdate}
                disabled={loading}
                className="px-3 py-1 text-sm bg-red-600 rounded"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}