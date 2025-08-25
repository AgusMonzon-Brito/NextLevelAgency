import styles from "./Home.module.css";
import Header from "@/Components/Header/Header.jsx";
import Footer from "@/Components/Footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className={styles.titulo}>Home</h1>
      </main>
      <Footer />
    </>
  );
};

export default Home;
