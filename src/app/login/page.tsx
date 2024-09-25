"use client";
import ImagePlaceholderIcon from "@/components/icons/image-placeholder";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import useSupabaseClient from "@/lib/supabase/client";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const supabase = useSupabaseClient();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", {
      email,
      password,
      rememberMe,
    });
  };

  const loginWithGoogle = async () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `http://localhost:3000/auth/callback`,
        skipBrowserRedirect: false,
      },
    });
  };

  return (
    <div className="flex min-h-screen bg-white space-x-10">
      {/* Left side - Signup Form */}
      <div className="mx-10 flex flex-col items-center justify-center md:ml-60">
        <div className=" max-w-sm lg:w-96">
          <h2 className="mt-6 text-3xl font-extrabold font-arial text-center text-lightblue">
            SE CONNECTER
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-lightblue font-sans"
              >
                E-mail
              </label>
              <div className="mt-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="email@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-lightblue"
              >
                Mot de passe
              </label>
              <div className="mt-1 relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <EyeIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  id="remember-me"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked as boolean)
                  }
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-lightblue"
                >
                  Rester connecté
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium text-lightblue hover:text-blue-500"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lightblue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                VALIDER
              </Button>
            </div>
          </form>
          <Link
            className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
            style={{ backgroundColor: "#3b5998" }}
            onClick={loginWithGoogle}
            role="button"
            href={""}
          >
            <Image
              src={"/icons/google.svg"}
              alt={"google button"}
              width={30}
              height={30}
            />
            Continue with Google
          </Link>

          <p className="mt-4 text-center text-sm text-lightblue">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod.
          </p>
          <Link
            href="/signup"
            className="font-bold text-lightblue hover:text-blue-500 flex justify-center mt-4"
          >
            CREER UN COMPTE
          </Link>
        </div>
      </div>

      {/* Right side - Image Placeholder */}
      <div className="hidden md:flex items-center">
        <div className=" ">
          <ImagePlaceholderIcon className="" />
        </div>
      </div>
    </div>
  );
}
