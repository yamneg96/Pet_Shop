"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import MotionWrapper from "@/components/MotionWrapper";

export default function SavedPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;
  if (!session) redirect("/signin");

  return (
    <MotionWrapper>
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">Saved Items</h1>
        <p>Your bookmarked pets and products.</p>
      </div>
    </MotionWrapper>
  );
}
