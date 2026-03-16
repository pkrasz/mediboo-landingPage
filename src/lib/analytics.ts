declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
export const isAnalyticsEnabled = Boolean(GA_MEASUREMENT_ID);

function canTrackAnalytics() {
  return (
    isAnalyticsEnabled &&
    typeof window !== "undefined" &&
    typeof window.gtag === "function"
  );
}

export function trackPageView(pagePath: string) {
  if (!canTrackAnalytics()) {
    return;
  }

  const gtag = window.gtag;

  if (!gtag) {
    return;
  }

  gtag("event", "page_view", {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackEvent(
  eventName:
    | "android_waitlist_click"
    | "app_store_click"
    | "google_play_click"
    | "waitlist_submit",
  params?: Record<string, unknown>,
) {
  if (!canTrackAnalytics()) {
    return;
  }

  const gtag = window.gtag;

  if (!gtag) {
    return;
  }

  gtag("event", eventName, params);
}
