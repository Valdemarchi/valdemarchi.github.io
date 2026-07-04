"use client";

import { useEffect, useState } from "react";

type Item = {
  id: string;
  media_url: string;
  media_type: "image" | "video";
  title?: string;
  comment?: string;
  created_at?: string;
};

export default function GalleryClient({ items }: { items: Item[] }) {
  const [active, setActive] = useState<Item | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };

    window.addEventListener("keydown", onKeyDown);

    document.body.style.overflow = active ? "hidden" : "auto";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [active]);

  return (
    <>
      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {items?.length ? (
          items.map((item) => (
            <div
              key={item.id}
              onClick={() => setActive(item)}
              className="cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-red-500/40 transition"
            >
              {item.media_type === "image" ? (
                <img
                  src={item.media_url}
                  className="w-full h-60 object-cover hover:scale-105 transition duration-300"
                />
              ) : (
                <video
                  src={item.media_url}
                  className="w-full h-60 object-cover"
                />
              )}

              <div className="p-4">
                <h3 className="text-sm text-gray-200">
                  {item.title || "Без названия"}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400">
            Галерея пустая
          </div>
        )}
      </div>

      {/* MODAL */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setActive(null)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-red-500 transition"
            >
              ✕
            </button>

            {/* MEDIA */}
            <div className="flex justify-center">
              {active.media_type === "image" ? (
                <img
                  src={active.media_url}
                  className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
                />
              ) : (
                <video
                  src={active.media_url}
                  controls
                  autoPlay
                  className="max-h-[75vh] w-auto rounded-xl shadow-2xl"
                />
              )}
            </div>

            {/* INFO */}
            <div className="mt-6 text-center text-white space-y-2">
              <h3 className="text-xl font-semibold">
                {active.title || "Без названия"}
              </h3>

              {active.comment && (
                <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                  {active.comment}
                </p>
              )}

              {active.created_at && (
                <p className="text-gray-600 text-xs">
                  {new Date(active.created_at).toLocaleDateString("ru-RU")}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}