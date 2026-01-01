"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t p-10 text-sm text-muted-foreground"
    >
      <div className="flex justify-between flex-wrap gap-6">
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <Link href="/legal/terms">Terms</Link><br />
          <Link href="/legal/privacy">Privacy</Link><br />
          <Link href="/legal/security">Security</Link>
        </div>
      </div>
    </motion.footer>
  );
}
