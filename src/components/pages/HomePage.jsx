import styles from "../../style/Style";
import Nav from "../../Navbar/Navbar";
import Hero from "../Hero";
import Jobs from "../Jobs";
import Discreption from "../Discreption";

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
          <Jobs />
          <Discreption />
        </div>
      </div>
    </>
  );
};
export default HomePage;
