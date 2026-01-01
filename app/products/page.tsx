"use client";

import MotionWrapper from "@/components/MotionWrapper";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <MotionWrapper>
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">Available Pets & Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <Link
              key={id}
              href={`/products/${id}`}
              className="border p-4 rounded hover:shadow"
            >
              Product #{id}
            </Link>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
