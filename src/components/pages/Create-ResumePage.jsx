import Nav from "../../Navbar/Navbar";
import styles from "../../style/Style";
import Create_Resume from "../ResumeDataForm";

const Create_ResumePage = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Nav />
        <Create_Resume />
      </div>
    </div>
  );
};

export default Create_ResumePage;
