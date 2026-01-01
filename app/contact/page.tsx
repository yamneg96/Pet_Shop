"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, MapPin, ExternalLink, MessageCircle } from "lucide-react";
import MotionWrapper from "@/components/MotionWrapper";

export default function ContactPage() {
  const contactMethods = [
    { 
      icon: <Phone size={24} />, 
      title: "Call Us", 
      detail: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+251 900 000 000", 
      sub: "9 AM - 6 PM (Mon - Sat)",
      link: `tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`,
      color: "bg-blue-500/10 text-blue-500"
    },
    { 
      icon: <Send size={24} />, 
      title: "Telegram", 
      detail: `@${process.env.NEXT_PUBLIC_TELEGRAM_USERNAME || "AddisPet"}`, 
      sub: "Fastest response time",
      link: `https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM_USERNAME}`,
      color: "bg-sky-500/10 text-sky-500"
    },
    { 
      icon: <Mail size={24} />, 
      title: "Email", 
      detail: "hello@addispet.com", 
      sub: "For general inquiries",
      link: "mailto:hello@addispet.com",
      color: "bg-orange-500/10 text-orange-500"
    },
  ];

  return (
    <MotionWrapper>
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-sm font-bold mb-6"
          >
            <MessageCircle size={16} />
            We're here for you and your pets
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Have questions about our products or adoption process? Our team in 
            <span className="text-foreground font-semibold"> Addis Ababa</span> is ready to help you find exactly what you need.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.link}
              target={method.title === "Telegram" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-10 rounded-[2.5rem] border border-border bg-card hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-300 text-center"
            >
              <div className={`mx-auto w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-lg font-semibold mb-1 group-hover:text-orange-500 transition-colors">
                {method.detail}
              </p>
              <p className="text-sm text-muted-foreground">{method.sub}</p>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                Connect Now <ExternalLink size={14} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Map/Location Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden p-1 bg-gradient-to-r from-orange-500/20 via-border to-blue-500/20 rounded-[3rem]"
        >
          <div className="bg-card rounded-[2.9rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-6">
              <div className="p-5 bg-orange-500 rounded-[1.5rem] text-white shadow-lg shadow-orange-500/30">
                <MapPin size={32} />
              </div>
              <div>
                <h4 className="font-black text-2xl mb-1">Our Local Hub</h4>
                <p className="text-muted-foreground text-lg">Bole, Behind Edna Mall</p>
                <p className="text-sm font-medium text-orange-500">Addis Ababa, Ethiopia</p>
              </div>
            </div>
            
            <motion.a 
              href="https://maps.google.com" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto bg-foreground text-background px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-black/10 flex items-center justify-center gap-3 group"
            >
              Open in Google Maps
              <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </MotionWrapper>
  );
}