import Nav from "../../Navbar/Navbar";
import Templates from "../Templates";
import styles from "../../style/Style";

const TemplatePage = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Nav />
        <Templates />
      </div>
    </div>
  );
};
export default TemplatePage;
