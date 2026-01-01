// File: app/products/[id]/page.tsx - A detailed product view with dynamic animations and localized shopping info.
"use client";

import MotionWrapper from "@/components/MotionWrapper";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, Heart, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <MotionWrapper>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Navigation */}
        <Link href="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-10 transition-colors group">
          <div className="p-2 bg-secondary rounded-lg group-hover:-translate-x-1 transition-transform">
            <ArrowLeft size={18} />
          </div>
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Image Gallery (Simplified) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square bg-secondary/50 rounded-[3rem] border border-border flex items-center justify-center text-[10rem] shadow-inner">
              🐾
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-secondary/30 rounded-2xl border border-border" />
              ))}
            </div>
          </motion.div>

          {/* Right: Product Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <span className="px-3 py-1 bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 rounded-full text-xs font-bold uppercase tracking-widest">
                In Stock
              </span>
              <h1 className="text-4xl md:text-5xl font-black mt-4 mb-2">Premium Pet Product #{params.id}</h1>
              <p className="text-3xl font-bold text-orange-500">3,500 ETB</p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Our high-quality pet supplies are tested for safety and comfort. This product is designed specifically 
              for the needs of pets living in urban environments like Addis Ababa. Durable, stylish, and pet-approved.
            </p>

            {/* Features Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 p-4 bg-secondary/40 rounded-2xl border border-border">
                <Truck className="text-orange-500" size={20} />
                <span className="text-sm font-medium">Addis Wide Delivery</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary/40 rounded-2xl border border-border">
                <ShieldCheck className="text-orange-500" size={20} />
                <span className="text-sm font-medium">Quality Guaranteed</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8 border-t border-border">
              <button className="flex-1 bg-primary text-primary-foreground py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:opacity-90 transition-opacity">
                <ShoppingCart size={22} />
                Add to Cart
              </button>
              <button className="p-4 border-2 border-border rounded-2xl hover:bg-secondary transition-colors">
                <Heart size={24} />
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Estimated delivery: <span className="text-foreground font-bold italic">2-4 Hours (Bole area)</span>
            </p>
          </motion.div>
        </div>
      </div>
    </MotionWrapper>
  );
}