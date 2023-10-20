import styles from "../../style/Style";
import SingUp from "../../Sing&Login/SingUp";
import Nav from "../../Navbar/Navbar";

const SingUpPage = () => {
  return (

    // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi vel eligendi non ratione culpa alias, debitis distinctio odit minima blanditiis earum officia necessitatibus reprehenderit, perferendis tempore nam at possimus!</p>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Nav/>
        <SingUp />
      </div>
    </div>
  );
};
export default SingUpPage;
