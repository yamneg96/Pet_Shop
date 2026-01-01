"use client";

import Link from "next/link"; import { motion } from "framer-motion"; import { Facebook, Instagram, Send, Mail, MapPin, PawPrint } from "lucide-react";

export default function Footer() { const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 }, }, };

const itemVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 }, };

const currentYear = new Date().getFullYear();

return ( <motion.footer initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="bg-background border-t border-border mt-20" > <div className="max-w-7xl mx-auto px-6 py-12 md:py-16"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Brand Section */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div className="bg-orange-500 p-1.5 rounded-lg text-white">
            <PawPrint size={20} />
          </div>
          <span>Addis<span className="text-orange-500">Pet</span></span>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-xs">
          Building the most trusted pet community in Ethiopia. Quality supplies and loving adoptions, delivered to your door.
        </p>
        <div className="flex gap-4 pt-2">
          <Link href="[https://t.me/yourtelegram](https://t.me/yourtelegram)" className="p-2 rounded-full bg-secondary hover:text-orange-500 transition-colors">
            <Send size={18} />
          </Link>
          <Link href="#" className="p-2 rounded-full bg-secondary hover:text-orange-500 transition-colors">
            <Instagram size={18} />
          </Link>
          <Link href="#" className="p-2 rounded-full bg-secondary hover:text-orange-500 transition-colors">
            <Facebook size={18} />
          </Link>
        </div>
      </motion.div>

      {/* Quick Links */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h4 className="font-bold text-foreground">Explore</h4>
        <ul className="space-y-2">
          <li><Link href="/products" className="text-muted-foreground hover:text-orange-500 transition-colors">Shop Supplies</Link></li>
          <li><Link href="/adopt" className="text-muted-foreground hover:text-orange-500 transition-colors">Adopt a Pet</Link></li>
          <li><Link href="/contact" className="text-muted-foreground hover:text-orange-500 transition-colors">Contact Us</Link></li>
        </ul>
      </motion.div>

      {/* Legal Section */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h4 className="font-bold text-foreground">Legal</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li><Link href="/legal/terms" className="hover:text-orange-500 transition-colors">Terms of Service</Link></li>
          <li><Link href="/legal/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
          <li><Link href="/legal/security" className="hover:text-orange-500 transition-colors">Security</Link></li>
        </ul>
      </motion.div>

      {/* Local Info Section */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h4 className="font-bold text-foreground">Visit Us</h4>
        <div className="space-y-3 text-muted-foreground">
          <div className="flex items-start gap-2">
            <MapPin size={18} className="mt-1 flex-shrink-0 text-orange-500" />
            <span>Bole, Rwanda St.<br />Addis Ababa, Ethiopia</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-orange-500" />
            <span>hello@addispet.com</span>
          </div>
        </div>
      </motion.div>
    </div>

    <motion.div 
      variants={itemVariants}
      className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground"
    >
      <p>© {currentYear} AddisPet. All rights reserved.</p>
      <p>Made by <Link href={'https://nydevofficial.vercel.app'} className="font-bold italic underline text-orange-500">NYDev Team</Link> in Addis Ababa</p>
    </motion.div>
  </div>
</motion.footer>
); }