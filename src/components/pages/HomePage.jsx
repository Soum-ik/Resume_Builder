import styles from "../../style/Style";
import Nav from "../Navbar";
const HomePage = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Nav />
      </div>
    </div>
  );
};
export default HomePage;
