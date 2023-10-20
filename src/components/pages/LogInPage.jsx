import styles from "../../style/Style";
import Nav from "../../Navbar/Navbar";
import LogIn from "../../Sing&Login/Login"

const LogInPage = () => {
  return (

    // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo commodi vel eligendi non ratione culpa alias, debitis distinctio odit minima blanditiis earum officia necessitatibus reprehenderit, perferendis tempore nam at possimus!</p>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Nav/>
        <LogIn/>
      </div>
    </div>
  );
};
export default LogInPage;
