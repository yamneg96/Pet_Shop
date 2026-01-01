"use client";

import { signIn } from "next-auth/react";
import { motion, Variants } from "framer-motion"; // Import Variants type
import { PawPrint, Chrome } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  // Explicitly typing the variants as Variants fixes the "string" vs "Easing" error
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
        ease: "easeOut" // TypeScript now accepts this inside the Variants type
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md bg-card/80 backdrop-blur-xl border border-border p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-black/5 text-center"
      >
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="bg-orange-500 p-4 rounded-2xl text-white shadow-lg shadow-orange-500/20 rotate-3">
            <PawPrint size={32} />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2 mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            Welcome to <span className="text-orange-500">AddisPet</span>
          </h1>
          <p className="text-muted-foreground text-sm">
            Join the most trusted pet community in Ethiopia.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-3 bg-foreground text-background py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-foreground/10"
          >
            <Chrome size={22} />
            Continue with Google
          </motion.button>
        </motion.div>

        <motion.p variants={itemVariants} className="mt-8 text-xs text-muted-foreground px-4 leading-relaxed">
          By continuing, you agree to AddisPet&apos;s 
          <Link href="/legal/terms" className="text-primary hover:underline font-medium mx-1">Terms of Service</Link> 
          and 
          <Link href="/legal/privacy" className="text-primary hover:underline font-medium mx-1">Privacy Policy</Link>.
        </motion.p>
      </motion.div>
    </div>
  );
}