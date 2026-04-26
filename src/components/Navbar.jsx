"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };
  console.log(user);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} width={30} height={30} alt="Foodie Logo" />
          <h1 className="text-2xl font-bold text-yellow-500">Foodie</h1>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/food" className="hover:text-yellow-500">
            Food Items
          </Link>
          <Link href="/about" className="hover:text-yellow-500">
            About
          </Link>
          <Link href="/contact" className="hover:text-yellow-500">
            Contact
          </Link>

          {!user ? (
            <Link href="/login" className="px-4 py-2 bg-yellow-500 rounded">
              Login
            </Link>
          ) : (
            <div className="relative group flex items-center gap-2">
              {/* 👇 PROFILE IMAGE */}
              <img
                src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                className="w-10 h-10 rounded-full border"
              />

              <div className="absolute right-0 top-12 w-48 bg-white shadow-lg rounded opacity-0 group-hover:opacity-100 transition">
                <div className="p-3 border-b">
                  <p className="font-semibold">{user.displayName}</p>
                  <p className="text-[10px] text-gray-500">{user.email}</p>
                </div>

                <Link
                  href="/add-product"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Add Product
                </Link>

                <Link
                  href="/manage-products"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Manage Products
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3">
          <Link href="#menu" className="block">
            Food Items
          </Link>
          <Link href="/about" className="block">
            About
          </Link>
          <Link href="/contact" className="block">
            Contact
          </Link>

          {!user ? (
            <>
              <button
                onClick={() =>
                  setUser({ name: "Rezwan", email: "user@mail.com" })
                }
                className="w-full border py-2 rounded"
              >
                Login
              </button>
              <button className="w-full bg-yellow-500 py-2 rounded">
                Register
              </button>
            </>
          ) : (
            <>
              <div className="border p-3 rounded">
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <Link href="/add-product" className="block">
                Add Product
              </Link>
              <Link href="/manage-products" className="block">
                Manage Products
              </Link>
              <button onClick={handleLogout} className="text-red-500">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
