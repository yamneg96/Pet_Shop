"use client";

import MotionWrapper from "@/components/MotionWrapper";
import { motion } from "framer-motion";
import { ShoppingCart, CreditCard, ShieldCheck, Trash2, Plus, Minus } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CartPage() {
  const handleCheckout = async () => {
    // In a real app, this would trigger your API route
    console.log("Stripe checkout initiated");
  };

  return (
    <MotionWrapper>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-10 flex items-center gap-4">
          <ShoppingCart size={36} className="text-orange-500" />
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Item List */}
          <div className="lg:col-span-2 space-y-4">
            {/* Mock Item */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6 p-6 bg-card border border-border rounded-[2rem] relative overflow-hidden group"
            >
              <div className="w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center text-4xl">
                🦴
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Premium Chew Toy</h3>
                <p className="text-sm text-muted-foreground mb-3">Category: Accessories</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg overflow-hidden">
                    <button className="p-1 hover:bg-secondary"><Minus size={16} /></button>
                    <span className="px-3 py-1 font-medium text-sm">1</span>
                    <button className="p-1 hover:bg-secondary"><Plus size={16} /></button>
                  </div>
                  <button className="text-destructive hover:bg-destructive/10 p-2 rounded-lg transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-xl">450 ETB</p>
              </div>
            </motion.div>
          </div>

          {/* Order Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-secondary/40 border border-border p-8 rounded-[2.5rem] h-fit sticky top-28"
          >
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="text-foreground font-medium">450 ETB</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping (Addis)</span>
                <span className="text-foreground font-medium text-green-600">Free</span>
              </div>
              <div className="border-t border-border pt-4 flex justify-between">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-lg text-orange-500">450 ETB</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:opacity-90 transition-all mb-6"
            >
              <CreditCard size={20} />
              Checkout Securely
            </button>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck size={14} className="text-green-500" />
                Payments processed securely by Stripe
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MotionWrapper>
  );
}