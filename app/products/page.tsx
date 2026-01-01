"use client";

import { useState } from "react";
import MotionWrapper from "@/components/MotionWrapper";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Search, Filter, Star } from "lucide-react";

// Mock data for AddisPet
const PRODUCTS = [
  { id: "1", name: "Premium Puppy Kibble", price: 2400, category: "Food", image: "🐶", rating: 4.8 },
  { id: "2", name: "Modern Cat Tree", price: 4500, category: "Accessories", image: "🐈", rating: 4.9 },
  { id: "3", name: "Golden Retriever Puppy", price: 12000, category: "Adoption", image: "🐕", rating: 5.0 },
  { id: "4", name: "Organic Catnip", price: 850, category: "Food", image: "🌿", rating: 4.5 },
  { id: "5", name: "Adjustable Leather Leash", price: 1200, category: "Accessories", image: "🦮", rating: 4.7 },
  { id: "6", name: "Local Rescue Kitten", price: 0, category: "Adoption", image: "🐱", rating: 5.0 },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Food", "Accessories", "Adoption"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <MotionWrapper>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Marketplace</h1>
            <p className="text-muted-foreground">Premium supplies and furry friends in Addis.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input 
                type="text" 
                placeholder="Search pets or food..." 
                className="pl-10 pr-4 py-2.5 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 w-64"
              />
            </div>
            <button className="p-2.5 bg-secondary rounded-xl border border-border">
              <Filter size={20} />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                activeCategory === cat 
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30" 
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PRODUCTS.filter(p => activeCategory === "All" || p.category === activeCategory).map((product) => (
            <motion.div key={product.id} variants={cardVariants}>
              <div className="group relative bg-card border border-border rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-300">
                {/* Image Placeholder */}
                <Link href={`/products/${product.id}`}>
                  <div className="aspect-square bg-secondary/50 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                    {product.image}
                  </div>
                </Link>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 p-3 bg-background/80 backdrop-blur-md rounded-full text-muted-foreground hover:text-red-500 transition-colors">
                  <Heart size={20} />
                </button>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1">{product.category}</p>
                      <Link href={`/products/${product.id}`}>
                        <h3 className="font-bold text-xl hover:text-orange-500 transition-colors">{product.name}</h3>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-yellow-500 mb-4">
                    <Star size={14} fill="currentColor" />
                    <span className="font-bold text-foreground">{product.rating}</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-2xl font-black">
                      {product.price === 0 ? "Free" : `${product.price.toLocaleString()} ETB`}
                    </p>
                    <button className="p-3 bg-primary text-primary-foreground rounded-2xl hover:scale-105 active:scale-95 transition-all">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionWrapper>
  );
}