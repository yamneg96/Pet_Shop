"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import MotionWrapper from "@/components/MotionWrapper";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SavedPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  
  if (!session) redirect("/signin");

  // Mock check for empty state
  const hasItems = false; 

  return (
    <MotionWrapper>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">Saved Items</h1>
          <p className="text-muted-foreground text-lg">Manage your favorite pets and accessories.</p>
        </div>

        {!hasItems ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-24 px-6 bg-secondary/30 rounded-[3rem] border-2 border-dashed border-border text-center"
          >
            <div className="bg-background p-6 rounded-full shadow-sm mb-6">
              <Heart size={48} className="text-muted-foreground/30" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground max-w-xs mb-8">
              Looks like you haven't saved any pets or products yet. Start exploring!
            </p>
            <Link href="/products">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-2xl font-bold flex items-center gap-2"
              >
                Go to Shop <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Saved items would be mapped here */}
          </div>
        )}
      </div>
    </MotionWrapper>
  );
}