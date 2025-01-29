import { useEffect } from "react";
import styles from "./hero.module.scss";

function Hero() {
  useEffect(() => {
    window.gtag?.("event", "page_view", {
      page_title: "Home",
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }, []);

  const handleClick = () => {
    console.log("Botão clicado!");

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "button_click_testestestes", {
        event_category: "Engajamento",
        event_label: "Botão principal",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>React.js Analytics POC</h1>
        <p>Esta página está sendo rastreada pelo Google Analytics.</p>
        <button onClick={handleClick}>Clique Aqui!</button>
        <p className={styles.description}>
          Os cliques neste botão estão sendo rastreados no
        </p>
      </div>
    </div>
  );
}

export default Hero;
