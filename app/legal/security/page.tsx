"use client";

import MotionWrapper from "@/components/MotionWrapper";
import { Lock, Key, Globe, ShieldAlert } from "lucide-react";

export default function SecurityPage() {
  return (
    <MotionWrapper>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
            <Lock size={32} />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">Security at AddisPet</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We use the same technology as global banks to ensure your data and transactions in Ethiopia remain private.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-[2rem] border border-border bg-card hover:border-green-500/50 transition-colors">
            <Key className="text-green-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">Google OAuth 2.0</h3>
            <p className="text-sm text-muted-foreground">We never see or store your passwords. Authentication is handled securely through Google's infrastructure.</p>
          </div>
          
          <div className="p-8 rounded-[2rem] border border-border bg-card hover:border-green-500/50 transition-colors">
            <Globe className="text-green-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">Encrypted Traffic</h3>
            <p className="text-sm text-muted-foreground">Every interaction with AddisPet is protected by 256-bit SSL encryption, ensuring your session is private.</p>
          </div>
        </div>

        <div className="mt-10 p-8 rounded-[2.5rem] bg-background border-2 border-green-500/10 text-center">
          <ShieldAlert className="mx-auto text-green-500 mb-4" size={40} />
          <h2 className="text-2xl font-bold mb-4">Report a Vulnerability</h2>
          <p className="text-muted-foreground mb-6">Found a security bug? Let us know and help keep the Addis pet community safe.</p>
          <a href="mailto:security@addispet.com" className="font-bold text-green-500 hover:underline">
            security@addispet.com
          </a>
        </div>
      </div>
    </MotionWrapper>
  );
}