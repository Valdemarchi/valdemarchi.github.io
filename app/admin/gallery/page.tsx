import { createClient } from "@/utils/supabase/server";
import GalleryUploader from "./uploader";
import GalleryClient from "./GalleryClient";

export default async function GalleryPage() {
  const supabase = await createClient();

  const { data: items, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Gallery error:", error);
  }

  return (
    <main className="min-h-screen bg-[#0B1220] text-white p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        <h1 className="text-3xl font-bold">Галерея</h1>

        {/* UPLOADER */}
        <GalleryUploader />

        {/* CLIENT GRID (ВАЖНО) */}
        <GalleryClient items={items ?? []} />

      </div>
    </main>
  );
}