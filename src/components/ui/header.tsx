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
    <header className="bg-primary-112959 p-4 w-4/5 mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">Your Logo</div>
      </div>

      <div className="flex flex-wrap justify-between mt-4 items-baseline text-white space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded p-2 flex-grow md:flex-grow-0"
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

      <nav className="flex flex-wrap justify-between mt-4 space-x-4 text-white">
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
        <ul className="flex items-center space-x-4 text-white">
          {!data.session && (
            <>
              <li>
                <Link href="/signup" className="">
                  Inscription
                </Link>
              </li>
              <li>
                <Link href="/login" className="">
                  Se connecter
                </Link>
              </li>
            </>
          )}
          {data.session && (
            <form action={logoutAction} className="flex">
              <button className="ml-4">Se déconnecter</button>
            </form>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
