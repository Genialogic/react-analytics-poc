import { useEffect } from "react";

import Hero from "./components/hero";
import "./styles/global.scss";

function App() {
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: window.location.pathname,
      });
    }
  }, []);

  return <Hero />;
}

export default App;
