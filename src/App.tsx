import { useAnalytics } from "./hooks/useAnalytics";
import Hero from "./components/hero";
import "./styles/global.scss";

function App() {
  useAnalytics();

  return <Hero />;
}

export default App;
