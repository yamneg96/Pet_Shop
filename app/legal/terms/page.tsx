"use client";

import MotionWrapper from "@/components/MotionWrapper";
import { FileText, Scale, AlertCircle } from "lucide-react";

export default function TermsPage() {
  const terms = [
    { title: "Service Use", content: "By using AddisPet, you agree to provide accurate information for deliveries within Addis Ababa and surrounding areas." },
    { title: "Adoption Policy", content: "Adopting a pet requires a verification process. We reserve the right to refuse adoptions if the pet's safety cannot be guaranteed." },
    { title: "Payments", content: "International payments are processed via Stripe. Local payment integration (Telebirr/CBE) is subject to current Ethiopian regulations." },
  ];

  return (
    <MotionWrapper>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500">
            <FileText size={32} />
          </div>
          <h1 className="text-4xl font-extrabold text-foreground">Terms of Service</h1>
        </div>

        <div className="grid gap-8 mt-12">
          {terms.map((term, i) => (
            <div key={i} className="bg-secondary/30 p-8 rounded-[2rem] border border-border">
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Scale size={20} className="text-blue-500" />
                {term.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{term.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-orange-500/5 rounded-2xl border border-orange-500/20 flex gap-4">
          <AlertCircle className="text-orange-500 shrink-0" />
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> These terms are designed for the AddisPet MVP. Full legal compliance for the Ethiopian market is handled by the NYDev legal team.
          </p>
        </div>
      </div>
    </MotionWrapper>
  );
}