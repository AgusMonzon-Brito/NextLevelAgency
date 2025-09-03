import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import Header from "@/Components/Header/Header.jsx";
import Footer from "@/Components/Footer/Footer.jsx";
import videoFile from "@/Assets/Videos/201947-916877801_tiny.mp4";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("/Data/cards.json")
      .then((res) => {
        const data = res.data.map((c) => ({ ...c, flipped: false }));
        setCards(data);
      })
      .catch((err) => console.error("Error al intentar cargar cards:", err));
  }, []);

  const toggleFlip = (id) => {
    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, flipped: !c.flipped } : c))
    );
  };

  return (
    <>
      <Header />
      <main className={styles.home}>
        <div className={styles.glassContainer}>
          <h3 className={styles.tittleHome}>Agencia de publicidad digital</h3>
          <h1 className={styles.titleHome}>
            Sitios web profesionales y soluciones a medida
          </h1>
          <p className={styles.textHome}>
            Desarrollamos páginas únicas, <strong>tiendas online</strong>,
            plataformas académicas,{" "}
            <strong>sitios 3D para inmobiliarias</strong>, aplicaciones internas, automatización de
            procesos, y mucho más.
            <br />
            <br />
            También potenciamos tu negocio con <strong>SEO</strong>, publicidad
            digital e integración con redes sociales.
          </p>
          <p className={styles.subtitle}>
            En NextLevel transformamos ideas en experiencias digitales reales.
          </p>
        </div>
        <video muted autoPlay loop className={styles.videoContainer}>
          <source src={videoFile} type="video/mp4" className={styles.video} />
        </video>
        <div className={styles.capa}></div>
        <div className={styles.list}>
          <h2>Llevamos tu imagen a un nuevo nivel</h2>
          <div className={styles.cardList}>
            {cards.map((card) => (
              <div
                key={card.id}
                className={`${styles.card} ${
                  card.flipped ? styles.flipped : ""
                }`}
              >
                <div className={styles.cardInner}>
                  {/* Frente */}
                  <div className={styles.cardFront}>
                    <div
                      className={styles.cardImg}
                      style={{ backgroundImage: `url(${card.imagen})` }}
                    />
                    <h2>{card.titulo}</h2>
                    <p>{card.texto}</p>
                    <i
                      className={`bi bi-arrow-down-right-square-fill ${styles.flecha} ${styles.flechaDerecha}`}
                      onClick={() => toggleFlip(card.id)}
                    ></i>
                  </div>

                  {/* Reverso */}
                  <div className={styles.cardBack}>
                    <h3>Características</h3>
                    <p>{card.caracteristicas}</p>
                    <h3>Precio</h3>
                    <p>{card.precio}</p>
                    <button className={styles.solicitarBtn}>Solicitar</button>
                    <i
                      className={`bi bi-arrow-down-left-square-fill ${styles.flecha} ${styles.flechaIzquierda}`}
                      onClick={() => toggleFlip(card.id)}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
