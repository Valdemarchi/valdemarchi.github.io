import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();

  const file = formData.get("file") as File | null;
  const title = (formData.get("title") as string) || "";
  const comment = (formData.get("comment") as string) || "";

  if (!file) {
    return Response.json({ error: "No file" }, { status: 400 });
  }

  const ext = file.name.split(".").pop()?.toLowerCase() || "bin";
  const fileName = `${Date.now()}-${crypto.randomUUID()}.${ext}`;
  const filePath = `gallery/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from("gallery")
    .upload(filePath, file);

  if (uploadError) {
    return Response.json({ error: uploadError.message }, { status: 500 });
  }

  const { data } = supabase.storage.from("gallery").getPublicUrl(filePath);

  const mediaUrl = data.publicUrl;
  const mediaType = file.type.startsWith("video") ? "video" : "image";

  const { error: dbError } = await supabase.from("gallery").insert({
    title,
    comment,
    media_url: mediaUrl,
    media_type: mediaType,
    file_path: filePath,
    created_at: new Date().toISOString(),
  });

  if (dbError) {
    return Response.json({ error: dbError.message }, { status: 500 });
  }

  return Response.json({ success: true });
}