import styles from "./hero.module.scss";
import { useAnalytics } from "../../hooks/useAnalytics";

function Hero() {
  const { sendEvent } = useAnalytics();

  const handleClick = () => {
    sendEvent("button_click", { label: "Hero Button" });
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
