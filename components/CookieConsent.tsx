"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getConsent, setConsent } from "@/lib/analytics";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
  }, []);

  if (!visible) return null;

  const choose = (value: "accepted" | "declined") => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-14 z-40 border-t border-navy/10 bg-white/95 px-4 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur sm:bottom-0 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-charcoal/75">
          We use cookies for basic site analytics. See our{" "}
          <Link href="/privacy" className="underline hover:no-underline">
            Privacy Policy
          </Link>{" "}
          for details. You can change this anytime.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => choose("declined")}
            className="rounded-md border border-navy/20 px-4 py-2 text-sm font-medium text-charcoal hover:bg-navy/5"
          >
            Decline
          </button>
          <button
            onClick={() => choose("accepted")}
            className="rounded-md bg-navy px-4 py-2 text-sm font-medium text-ivory hover:bg-navy-dark"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
