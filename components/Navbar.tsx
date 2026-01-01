"use client"

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { signOut } from "next-auth/react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 border-b">
      <Link href="/" className="font-bold text-lg">
        AddisPet
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/products">Products</Link>
        <Link href="/saved">Saved</Link>
        <Link href="/cart">Cart</Link>
        <ThemeToggle />
        <button onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    </nav>
  );
}
