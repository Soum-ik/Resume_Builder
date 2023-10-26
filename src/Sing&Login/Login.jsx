import System from "../components/System";
import styles from "../style/Style";
import { Link } from "react-router-dom";

const logIn = () => {
  return (
    <div className={`${styles.marginX} `}>
      <div className={`${styles.paddingY} ${styles.flexCenter}`}>
        <div className=" text-center ">
          <h1 className=" text-primary font-bold text-[40px]">Log In</h1>
          <p className=" text-dimWhite text-[20px]">
            We are happy to see you back!
          </p>
          <System icon={"Google"} name={"Google"} gap={"10"} />
          <System icon={"Facebook"} name={"Facebook"} gap={"10"} />

          <Link to="/singUpPage" className=" text-secondary ">
            I am not registered —{" "}
            <span className=" text-primary font-medium">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default logIn;
