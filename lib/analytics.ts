// Same GTM container the live gormanhardin.com site already uses
// (GTM-K42N8LQ8) -- reusing it instead of standing up a fresh property
// preserves whatever tags/triggers/ad-conversion pixels are already
// configured inside it. Ported consent-gating pattern from Framework
// Advisory's lib/analytics.ts.
export const GTM_ID = "GTM-K42N8LQ8";

export const CONSENT_KEY = "cookie-consent";
export const CONSENT_EVENT = "cookie-consent-changed";

export type ConsentValue = "accepted" | "declined";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === "accepted" || value === "declined" ? value : null;
}

export function setConsent(value: ConsentValue) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}
