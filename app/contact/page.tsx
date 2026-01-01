"use client";

import MotionWrapper from "@/components/MotionWrapper";

export default function ContactPage() {
  return (
    <MotionWrapper>
      <div className="p-10 max-w-xl">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <p className="mb-4">
          Phone: {process.env.NEXT_PUBLIC_CONTACT_PHONE}
        </p>
        <p>
          Telegram: @{process.env.NEXT_PUBLIC_TELEGRAM_USERNAME}
        </p>
      </div>
    </MotionWrapper>
  );
}
