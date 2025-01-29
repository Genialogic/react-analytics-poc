import { useEffect } from "react";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GTAG_ID;

export const useAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID, {
      gaOptions: {
        cookieDomain: "react-analytics-poc.netlify.app",
      },
    });
    trackPageView();
  }, []);

  const trackPageView = () => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  };

  const trackEvent = (action: string, category: string, label?: string) => {
    ReactGA.event({ action, category, label });
  };

  return { trackPageView, trackEvent };
};
