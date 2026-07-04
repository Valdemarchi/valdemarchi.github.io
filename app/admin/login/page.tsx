"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const supabase = createClient();

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (!error) {
      router.replace("/admin");
      router.refresh();
    } else {
      alert("Ошибка входа");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1220] text-white">
      <div className="w-80 p-6 rounded-xl border border-white/10 bg-white/5">
        <h1 className="text-xl mb-4">Admin login</h1>

        <input
          className="w-full p-3 mb-3 bg-black/30 border border-white/10 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 mb-3 bg-black/30 border border-white/10 rounded"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 p-3 rounded"
        >
          {loading ? "Вход..." : "Войти"}
        </button>
      </div>
    </div>
  );
}