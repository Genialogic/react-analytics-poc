import { trackEvent } from "../../utils/analytics";
import styles from "./hero.module.scss";

function Hero() {
  const handleClick = () => {
    trackEvent("Interação", "Clique no botão", "Hero Button");
    console.log("Botão clicado!");
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
