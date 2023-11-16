import System from "../components/System";
import styles from "../style/Style";
import { Link } from "react-router-dom";
import { FacebookAuth } from "../auth/Firebase";
const SingUp = () => {
  async function FacebookAuthBottonClicked() {
    const user = await FacebookAuth();
    console.log("facebook user", user);
  }

  return (
    <div className={`${styles.marginX} `}>
      <div className={`${styles.paddingY} ${styles.flexCenter}`}>
        <div className=" text-center ">
          <h1 className=" text-primary font-bold text-[40px]">Sing In</h1>
          <p className=" text-dimWhite text-[20px]">Welcome to Hello Builder</p>
          <System icon={"Google"} name={"Google"} gap={"10"} />
          <System icon={"Facebook"} name={"Facebook"} gap={"10"} />

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
