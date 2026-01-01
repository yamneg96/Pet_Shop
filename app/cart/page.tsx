"use client";

import MotionWrapper from "@/components/MotionWrapper";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CartPage() {
  const handleCheckout = async () => {
    alert("Stripe checkout stub (sandbox)");
  };

  return (
    <MotionWrapper>
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

        <button
          onClick={handleCheckout}
          className="mt-6 border px-6 py-2 rounded"
        >
          Pay with Stripe
        </button>
      </div>
    </MotionWrapper>
  );
}
