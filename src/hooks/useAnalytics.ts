const sendEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};

export const useAnalytics = () => {
  return { sendEvent };
};
