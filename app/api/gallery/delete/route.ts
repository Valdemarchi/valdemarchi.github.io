import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  const supabase = await createClient();

  const { id, filePath } = await req.json();

  if (!id || !filePath) {
    return Response.json({ error: "Missing data" }, { status: 400 });
  }

  // delete storage file
  await supabase.storage.from("gallery").remove([filePath]);

  // delete db row
  const { error } = await supabase
    .from("gallery")
    .delete()
    .eq("id", id);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}