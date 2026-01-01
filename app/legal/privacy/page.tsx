"use client";

import MotionWrapper from "@/components/MotionWrapper";
import { ShieldCheck, Eye, Lock, Database } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    { icon: <Eye size={20} />, title: "Data Collection", content: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact support via Telegram." },
    { icon: <Lock size={20} />, title: "Data Protection", content: "We use Google OAuth for secure authentication and industry-standard encryption to protect your personal data during transmission." },
    { icon: <Database size={20} />, title: "Data Usage", content: "Your data is used solely to improve your experience in Addis Ababa, process orders, and notify you about pet availability." },
  ];

  return (
    <MotionWrapper>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-500">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
        </div>

        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          At AddisPet, we value your privacy. This policy explains how we handle your information 
          within the Addis Ababa marketplace. Last updated: January 2026.
        </p>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <div key={i} className="border-l-2 border-orange-500/20 pl-8 relative">
              <div className="absolute -left-[11px] top-0 p-1 bg-background border-2 border-orange-500 rounded-full text-orange-500">
                {section.icon}
              </div>
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}