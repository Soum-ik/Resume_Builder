import styles from "../../../style/Style";
import Nav from "../../../Navbar/Navbar";
import MainTemplate1 from "./mainTemplate";

const Template1 = () => {
  return (
    <div className={`${styles.paddingX}`}>
      <Nav />
      <MainTemplate1 />
    </div>
  );
};
export default Template1;
