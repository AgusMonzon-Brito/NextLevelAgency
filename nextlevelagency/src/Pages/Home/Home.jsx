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
                      className="bi bi-arrow-down-right-square-fill"
                      style={{
                        fontSize: "2rem",
                        color: "var(--color-accent)",
                        cursor: "pointer",
                      }}
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
                      className="bi bi-arrow-down-left-square-fill"
                      style={{
                        fontSize: "2rem",
                        color: "var(--color-accent)",
                        cursor: "pointer",
                      }}
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
