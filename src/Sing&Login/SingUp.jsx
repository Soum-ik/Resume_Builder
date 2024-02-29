import System from "../components/System";
import styles from "../style/Style";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/authSetUp";

const SingUp = () => {
  const { googleAuth } = useAuth();

  return (
    <div className={`${styles.marginX} `}>
      <div className={`${styles.paddingY} ${styles.flexCenter}`}>
        <div className=" text-center ">
          <h1 className=" text-primary font-bold text-[40px]">Sing In</h1>
          <p className=" text-dimWhite text-[20px]">Welcome to Hello Builder</p>

          <div onClick={googleAuth}>
            <System icon={"Google"} name={"Google"} gap={"10"} />
          </div>
          

          <br />
          <Link to="/logInPage" className=" text-secondary ">
            I am registered —{" "}
            <span className=" text-primary font-medium">log In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SingUp;
