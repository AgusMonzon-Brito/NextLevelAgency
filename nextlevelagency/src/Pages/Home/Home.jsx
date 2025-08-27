import styles from "./Home.module.css";
import Header from "@/Components/Header/Header.jsx";
import Footer from "@/Components/Footer/Footer.jsx";
import videoFile from "@/Assets/Videos/201947-916877801_tiny.mp4";

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.home}>
        <video muted autoPlay loop className={styles.videoContainer}>
          <source src={videoFile} type="video/mp4" className={styles.video}/>
        </video>
        <div className={styles.capa}></div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
