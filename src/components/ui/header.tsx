import getUserSession from "@/lib/getUserSession";
import createSupabaseServerClient from "@/lib/supabase/server";
import Link from "next/link";
import React from "react";
import { BiEuro } from "react-icons/bi";
import { FaHome, FaNewspaper, FaUsers } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { GiEarthAmerica } from "react-icons/gi";

const Header: React.FC = async () => {
  const { data } = await getUserSession();

  const logoutAction = async () => {
    "use server";
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  };

  return (
    <header className="bg-primary-112959 p-4 w-[90%] mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">Your Logo</div>
      </div>

      <div className="flex justify-between ml-40 mt-4 items-baseline text-white">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded p-2"
        />
        <a href="/" className="flex items-center">
          <GiEarthAmerica className="mr-1" />
          Langue
        </a>
        <a href="/" className="flex items-center">
          <BiEuro className="mr-1" />
          Devise
        </a>
        <a href="/" className="flex items-center">
          <FiBell className="mr-1" />
          Mes alertes
        </a>
        <a href="/" className="flex items-center">
          <FaUsers className="mr-1" />
          Amis
        </a>
        <a href="/" className="flex items-center">
          <FaNewspaper className="mr-1" />
          Liste de souhaits
        </a>
        <a href="/" className="flex items-center">
          <FaHome className="mr-1" />
          Panier
        </a>
      </div>

      <nav className="flex justify-between mt-4 ml-40">
        <a href="/" className="text-white">
          Accueil
        </a>
        <a href="#" className="text-white">
          Artiste
        </a>
        <a href="#" className="text-white">
          Shop
        </a>
        <a href="#" className="text-white">
          Communauté
        </a>
        <a href="#" className="text-white">
          Notre Actu
        </a>
      </nav>

      <ul className="flex items-center space-x-4 text-white">
        {!data.session && (
          <>
            <li>
              <Link href="/signup" className="">
                Register
              </Link>
            </li>
            <li>
              <Link href="/login" className="">
                Login
              </Link>
            </li>
          </>
        )}
        {data.session && (
          <form action={logoutAction} className="flex">
            <button className="ml-4">Logout</button>
          </form>
        )}
      </ul>
    </header>
  );
};

export default Header;
