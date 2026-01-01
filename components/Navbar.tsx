"use client";

import { useState } from "react"; import Link from "next/link"; import ThemeToggle from "./ThemeToggle"; import { signOut, useSession } from "next-auth/react"; import { motion, AnimatePresence } from "framer-motion"; import { ShoppingCart, Heart, LogOut, PawPrint, Menu, X } from "lucide-react";

export default function Navbar() { 
  const { data: session } = useSession(); const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const navLinks = [ { name: "Products", href: "/products", icon: null }, { name: "Saved", href: "/saved", icon: <Heart size={18} /> }, { name: "Cart", href: "/cart", icon: <ShoppingCart size={18} /> }, ];

return ( <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md px-6 py-4" > <div className="max-w-7xl mx-auto flex items-center justify-between"> {/* Logo */} <Link href="/" className="group flex items-center gap-2 font-bold text-xl tracking-tighter"> <div className="bg-orange-500 p-1.5 rounded-lg text-white group-hover:rotate-12 transition-transform"> <PawPrint size={20} /> </div> <span>Addis<span className="text-orange-500">Pet</span></span> </Link>

    {/* Desktop Navigation */}
    <div className="hidden md:flex gap-8 items-center text-sm font-medium">
      {navLinks.map((link) => (
        <Link 
          key={link.name} 
          href={link.href}
          className="relative flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors group"
        >
          {link.icon}
          {link.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
        </Link>
      ))}
      
      <div className="h-4 w-[1px] bg-border mx-2" />
      <ThemeToggle />

      {session ? (
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => signOut()}
          className="flex items-center gap-2 bg-secondary hover:bg-destructive hover:text-destructive-foreground px-4 py-2 rounded-xl transition-all font-semibold text-xs"
        >
          <LogOut size={14} />
          Sign out
        </motion.button>
      ) : (
        <Link href="/signin">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-xl font-semibold shadow-lg shadow-primary/20"
          >
            Sign In
          </motion.button>
        </Link>
      )}
    </div>

    {/* Mobile Actions */}
    <div className="md:hidden flex items-center gap-3">
      <ThemeToggle />
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-2 bg-secondary rounded-xl text-foreground"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu Overlay */}
  <AnimatePresence>
    {isMobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="md:hidden border-t border-border mt-4 overflow-hidden"
      >
        <div className="flex flex-col gap-4 py-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-orange-500 px-2"
            >
              {link.icon || <PawPrint size={18} />}
              {link.name}
            </Link>
          ))}
          <hr className="border-border" />
          {session ? (
            <button 
              onClick={() => { signOut(); setIsMobileMenuOpen(false); }}
              className="flex items-center gap-3 text-lg font-medium text-destructive px-2"
            >
              <LogOut size={18} /> Sign Out
            </button>
          ) : (
            <Link 
              href="/signin" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-orange-500 px-2"
            >
              Sign In
            </Link>
          )}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</motion.nav>
); 
}