"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-10 text-center"
    >
      <h1 className="text-4xl font-bold mb-4">
        AddisPet 🐾
      </h1>
      <p className="text-muted-foreground">
        Discover pets and accessories in Addis Ababa.
      </p>
    </motion.section>
  );
}
