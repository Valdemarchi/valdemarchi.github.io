import { createClient } from "@/utils/supabase/server";
import GalleryClient from "./GalleryClient";

export default async function GalleryPage() {
  const supabase = await createClient();

  const { data: items, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Gallery fetch error:", error);
  }

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold">Галерея</h1>

        <p className="text-gray-400 mt-3 max-w-2xl">
          Фото и видео наших работ по ремонту дизельных систем
        </p>

        {/* CLIENT GRID */}
        <GalleryClient items={items ?? []} />

      </div>
    </main>
  );
}