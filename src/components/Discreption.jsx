import styles from "../style/Style";
import Resume from "../asset/resume.svg";

const Discreption = () => {
  return (
    <div className={`${styles.paddingX} ${styles.boxWidth}`}>
      <div>
        <img src={Resume} alt="" />
      </div>
      <div>
        <h5 className=" text-primary font-medium">RESUME MAKER</h5>
      </div>
    </div>
  );
};
export default Discreption;
