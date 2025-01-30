import { useEffect } from "react";
import { initGA, trackPageView } from "./utils/analytics";
import Hero from "./components/hero";
import "./styles/global.scss";

function App() {
  useEffect(() => {
    initGA();
    trackPageView();
  }, []);

  return <Hero />;
}

export default App;
