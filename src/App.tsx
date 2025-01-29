import ReactGA from "react-ga4";
import { useEffect } from "react";
import Hero from "./components/hero";
import "./styles/global.scss";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GTAG_ID;

function App() {
  useEffect(() => {
    ReactGA.initialize([
      {
        trackingId: GA_MEASUREMENT_ID,
        gaOptions: "https://react-analytics-poc.netlify.app",
      },
    ]);

    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "App.tsx",
    });
  }, []);

  return <Hero />;
}

export default App;
