"use client";

import MotionWrapper from "@/components/MotionWrapper";

export default function SecurityPage() {
  return (
    <MotionWrapper>
      <div className="p-10 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Security</h1>
        <p>We use OAuth and encrypted connections.</p>
      </div>
    </MotionWrapper>
  );
}
