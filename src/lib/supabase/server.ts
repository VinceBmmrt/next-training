"use server";

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export default async function createSupabaseServerClient() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options });
        },
        getAll: function (): RequestCookie[] {
          throw new Error("Function not implemented.");
        },
      },
    }
  );
}
