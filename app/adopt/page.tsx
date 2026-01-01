"use client";

import { useState } from "react";
import MotionWrapper from "../../components/MotionWrapper";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Info, MapPin, PawPrint, Filter, Sparkles, Home } from "lucide-react";

const ADOPTABLE_PETS = [
  {
    id: "p1",
    name: "Simba",
    breed: "Golden Retriever Mix",
    age: "2 Years",
    gender: "Male",
    traits: ["Playful", "Good with Kids"],
    image: "🐕",
    status: "Available",
    location: "Bole",
  },
  {
    id: "p2",
    name: "Luna",
    breed: "Abyssinian Mix",
    age: "6 Months",
    gender: "Female",
    traits: ["Quiet", "Affectionate"],
    image: "🐱",
    status: "Pending",
    location: "Old Airport",
  },
  {
    id: "p3",
    name: "Rex",
    breed: "German Shepherd",
    age: "4 Years",
    gender: "Male",
    traits: ["Protective", "Trained"],
    image: "🐕‍🦺",
    status: "Available",
    location: "CMC",
  },
  {
    id: "p4",
    name: "Mimi",
    breed: "Local Short Hair",
    age: "1 Year",
    gender: "Female",
    traits: ["Energetic", "Hunter"],
    image: "🐈",
    status: "Available",
    location: "Sarbet",
  },
];

export default function AdoptPage() {
  const [filter, setFilter] = useState("All");

  return (
    <MotionWrapper>
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4"
            >
              <Sparkles size={18} />
              Find your forever friend
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-6">
              Adopt, Don't <span className="text-orange-500">Shop</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every pet at AddisPet is vet-checked and ready for a loving home in Addis Ababa. 
              Start your journey of companionship today.
            </p>
          </div>

          <div className="flex gap-2 bg-secondary/50 p-1.5 rounded-2xl border border-border">
            {["All", "Dogs", "Cats"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-8 py-2.5 rounded-xl font-bold transition-all ${
                  filter === tab 
                  ? "bg-background shadow-lg text-orange-500" 
                  : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Pet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {ADOPTABLE_PETS.map((pet) => (
              <motion.div
                layout
                key={pet.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="group relative bg-card border border-border rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Pet Photo Area */}
                <div className="md:w-2/5 aspect-square md:aspect-auto bg-secondary/50 flex items-center justify-center text-8xl group-hover:scale-105 transition-transform duration-700 relative">
                    {pet.image}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-xs font-bold flex items-center gap-1">
                        <MapPin size={12} className="text-orange-500" />
                        {pet.location}
                    </div>
                </div>

                {/* Pet Info Area */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-3xl font-black mb-1">{pet.name}</h3>
                      <p className="text-muted-foreground font-medium">{pet.breed}</p>
                    </div>
                    <button className="p-3 bg-secondary rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                      <Heart size={20} />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg text-xs font-bold">{pet.age}</span>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-lg text-xs font-bold">{pet.gender}</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pet.traits.map((trait, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        {trait}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3">
                    <Link href={`/adopt/${pet.id}`} className="flex-1">
                      <button className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                        Meet {pet.name} <Info size={18} />
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Status Badge */}
                {pet.status === "Pending" && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-white px-6 py-1 rounded-bl-2xl text-xs font-black uppercase tracking-widest">
                    Reserved
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Adoption Process Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 lg:p-16 rounded-[4rem] bg-orange-500 text-white relative overflow-hidden"
        >
          <PawPrint size={300} className="absolute -bottom-20 -right-20 text-white/10 rotate-12" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl font-black mb-6 leading-tight">Ready to provide a home?</h2>
            <p className="text-orange-100 text-lg mb-10 leading-relaxed">
              Our adoption process is simple: Choose a pet, meet them in person, 
              and complete a basic home check. We're with you every step of the way.
            </p>
            <div className="flex flex-wrap gap-4">
               <button className="bg-white text-orange-500 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-black/10 hover:bg-orange-50 transition-colors flex items-center gap-2">
                 Adoption Requirements <Home size={20} />
               </button>
            </div>
          </div>
        </motion.div>
      </div>
    </MotionWrapper>
  );
}