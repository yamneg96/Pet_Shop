"use client";

import MotionWrapper from "@/components/MotionWrapper";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <MotionWrapper>
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">
          Product #{params.id}
        </h1>
        <p className="text-muted-foreground">
          Detailed information about this pet or product.
        </p>
      </div>
    </MotionWrapper>
  );
}
