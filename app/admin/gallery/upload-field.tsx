"use client";

import { useRef, useState } from "react";

export default function FileUploadField({
  onChange,
}: {
  onChange: (file: File | null) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");

  return (
    <div
      onClick={() => ref.current?.click()}
      className="cursor-pointer border-2 border-dashed border-white/20 hover:border-red-500 transition rounded-xl p-8 text-center bg-black/20"
    >
      <input
        ref={ref}
        type="file"
        accept="image/*,video/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0] || null;
          setName(file?.name || "");
          onChange(file);
        }}
      />

      <p className="text-white font-medium">
        📁 Нажмите чтобы выбрать файл
      </p>

      <p className="text-sm text-gray-400 mt-1">
        Фото или видео
      </p>

      {name && (
        <p className="text-red-400 mt-2 text-sm">
          Выбрано: {name}
        </p>
      )}

      <button
        type="button"
        className="mt-4 px-4 py-2 bg-red-600 rounded-lg text-sm"
      >
        Выбрать файл
      </button>
    </div>
  );
}