import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, message } = await req.json();

    const leadId = crypto.randomUUID();

    // -------------------------
    // 1. SUPABASE (не блокирует API)
    // -------------------------
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/leads`,
        {
          method: "POST",
          headers: {
            apikey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
            Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY!}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            id: leadId,
            name,
            phone,
            message,
            status: "new",
          }),
        }
      );
    } catch (e) {
      console.log("Supabase error (ignored):", e);
    }

    // -------------------------
    // 2. TELEGRAM (fire & forget + timeout + no crash)
    // -------------------------
    const sendTelegram = async (text: string) => {
      try {
        await fetch(
          `https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: process.env.TG_CHAT_ID,
              parse_mode: "HTML",
              text,
            }),
          }
        );
      } catch (e) {
        console.log("Telegram failed (ignored):", e);
      }
    };
    // НЕ БЛОКИРУЕМ API
    sendTelegram(`
🚨 <b>Новая заявка</b>

🆔 <code>${leadId}</code>

👤 ${name}
📞 <code>${phone}</code>
💬 ${message || "—"}

🕒 ${new Date().toLocaleString("ru-RU")}
    `);

    return NextResponse.json({ ok: true, id: leadId });
  } catch (e) {
    console.error("API error:", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}