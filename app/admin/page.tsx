import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LeadCard from "@/components/admin/LeadCard";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string }>;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const params = await searchParams;

  const status = params?.status;
  const q = params?.q;

  let query = supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (status && status !== "all") {
    query = query.eq("status", status);
  }

  if (q) {
    query = query.or(`name.ilike.%${q}%,phone.ilike.%${q}%`);
  }

  const { data: leads } = await query;

  const total = leads?.length || 0;

  return (
    <main className="min-h-screen bg-[#0B1220] text-white p-8">

      {/* HEADER */}
      <div className="flex flex-col gap-4 mb-8">

        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">CRM Админка</h1>

          <div className="flex items-center gap-4 text-sm text-gray-400">

            <span>Заявки: {total}</span>

            {/* LOGOUT (ВАЖНО: server action) */}
            <form
              action={async () => {
                "use server";
                const supabase = await createClient();
                await supabase.auth.signOut();
                redirect("/admin/login");
              }}
            >
              <button className="px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white">
                Выйти
              </button>
            </form>

          </div>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-2 text-sm">

          <a href="/admin?status=all" className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20">
            Все
          </a>

          <a href="/admin?status=new" className="px-3 py-1 rounded-full bg-red-500/20 text-red-400">
            Новые
          </a>

          <a href="/admin?status=processing" className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300">
            В работе
          </a>

          <a href="/admin?status=done" className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">
            Готово
          </a>

        </div>

        {/* SEARCH */}
        <form className="flex gap-2">
          <input
            name="q"
            defaultValue={q}
            placeholder="Поиск..."
            className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10"
          />
          <button className="px-4 py-2 rounded-xl bg-red-600">
            Найти
          </button>
        </form>

      </div>

      {/* LEADS */}
      <div className="grid gap-4">
        {leads?.length ? (
          leads.map((lead: any) => (
            <LeadCard key={lead.id} lead={lead} />
          ))
        ) : (
          <div className="p-10 text-center text-gray-400 border border-white/10 rounded-2xl bg-white/5">
            Ничего не найдено
          </div>
        )}
      </div>

    </main>
  );
}