"use server";

import createSupabaseServerClient from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function signInWithEmail(email: string, password: string) {
  const supabase = await createSupabaseServerClient(); // Provide the cookie management functions

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Error during sign in:", error.message);
    redirect("/error");
    return;
  }

  console.log("Sign in successful:", data);

  redirect("http://localhost:3000");
}

export async function signUpNewUser(email: string, password: string) {
  const supabase = await createSupabaseServerClient(); // Provide the cookie management functions

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "http://localhost:3000/auth/confirm",
    },
  });

  if (error) {
    console.error("Error during sign up:", error.message);
    redirect("/");
  }

  console.log("Sign up successful:", data);

  redirect("/login");
}
