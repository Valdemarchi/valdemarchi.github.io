import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  const supabase = await createClient();

  const { id, title, comment } = await req.json();

  if (!id) {
    return Response.json({ error: "Missing id" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("gallery")
    .update({
      title,
      comment,
    })
    .eq("id", id)
    .select(); // 🔥 ВАЖНО: покажет реально обновилось или нет

  if (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }

  // 🔥 ДИАГНОСТИКА
  if (!data || data.length === 0) {
    return Response.json(
      {
        error: "No rows updated (RLS or wrong id)",
        debug: { id, data },
      },
      { status: 400 }
    );
  }

  return Response.json({
    success: true,
    updated: data,
  });
}