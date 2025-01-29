import ReactGA from "react-ga4";
import { useEffect } from "react";
import Hero from "./components/hero";
import "./styles/global.scss";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GTAG_ID;

function App() {
  console.log("GA_MEASUREMENT_ID", GA_MEASUREMENT_ID);

  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID);

    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "App.tsx",
    });
  }, []);

  return <Hero />;
}

export default App;
