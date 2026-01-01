"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PawPrint, Truck, ShieldCheck, Heart } from "lucide-react";
import MotionWrapper from "@/components/MotionWrapper";

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <MotionWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Now Delivering in Addis Ababa
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Your Pet's Best Life <br />
              Starts in <span className="text-orange-500">Addis</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Join Ethiopia's most trusted pet community. Shop premium food, 
              find high-quality accessories, or adopt your new best friend.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 shadow-xl shadow-primary/20"
                >
                  Shop Now <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="/adopt">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-border px-8 py-4 rounded-2xl font-bold text-lg"
                >
                  Adopt a Pet
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Decorative background shapes */}
            <div className="absolute top-0 -right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -left-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 bg-gradient-to-br from-orange-100 to-orange-50 rounded-[3rem] p-4 border border-orange-200 shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
               <PawPrint size={200} className="text-orange-500/20 absolute -bottom-10 -right-10 rotate-12" />
               <div className="text-center">
                 <Heart size={80} className="text-orange-500 mx-auto animate-bounce mb-4" />
                 <p className="font-bold text-2xl text-orange-900">Pets of Addis</p>
                 <p className="text-orange-700/70">Coming Soon: Adoption Portal</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Truck className="text-orange-500" />, title: "Fast Delivery", desc: "Same-day delivery across Bole, Sarbet, and CMC." },
              { icon: <ShieldCheck className="text-orange-500" />, title: "Verified Quality", desc: "All our products are sourced from trusted global brands." },
              { icon: <Heart className="text-orange-500" />, title: "Pet Adoption", desc: "Helping local rescues find their forever homes in Addis." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 p-3 bg-secondary rounded-2xl w-fit">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
}