"use client";

import { signIn } from "next-auth/react";
import { motion } from "framer-motion";

export default function SignInPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="border p-10 rounded-lg text-center max-w-sm">
        <h1 className="text-2xl font-bold mb-4">
          Sign in to AddisPet
        </h1>
        <p className="text-sm text-muted-foreground mb-6">
          Secure login using Google
        </p>

        <button
          onClick={() => signIn("google")}
          className="w-full bg-black text-white py-2 rounded hover:opacity-90"
        >
          Continue with Google
        </button>
      </div>
    </motion.div>
  );
}