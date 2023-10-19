import styles from "../../style/Style";
import Nav from "../Navbar";
import Hero from "../Hero";
const HomePage = () => {
  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Nav />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </>
  );
};
export default HomePage;
