import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GTAG_ID;

export const initGA = () => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
    console.log("Google Analytics inicializado.");
  } else {
    console.warn("GA_MEASUREMENT_ID não está definido.");
  }
};

export const trackPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    title: document.title,
  });
};

export const trackEvent = (
  category: string,
  action: string,
  label?: string
) => {
  ReactGA.event({ category, action, label });
};
