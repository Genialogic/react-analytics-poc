import ReactGA from "react-ga4";
import styles from "./hero.module.scss";

function Hero() {
  const handleClick = () => {
    console.log("Botão clicado!");

    ReactGA.event({
      category: "User",
      action: "Click Button",
      label: "Clique Aqui",
      nonInteraction: true,
    });
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
