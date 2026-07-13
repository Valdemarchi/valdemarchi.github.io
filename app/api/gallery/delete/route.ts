import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, filePath } = await req.json();

  if (!id || !filePath) {
    return Response.json({ error: "Missing data" }, { status: 400 });
  }

  await supabase.storage.from("gallery").remove([filePath]);

  const { error } = await supabase.from("gallery").delete().eq("id", id);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}