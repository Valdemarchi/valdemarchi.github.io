"use client";

import { useState } from "react";
import FileUploadField from "./upload-field";

export default function GalleryUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("comment", comment);

    const res = await fetch("/api/gallery/upload", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (!res.ok) {
      alert("Ошибка загрузки");
      return;
    }

    setFile(null);
    setTitle("");
    setComment("");

    window.location.reload();
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">

      <h2 className="text-xl font-semibold">Загрузка файла</h2>

      <FileUploadField onChange={setFile} />

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Название"
        className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
      />

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Комментарий"
        className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
        rows={3}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl"
      >
        {loading ? "Загрузка..." : "Загрузить"}
      </button>
    </div>
  );
}