// import { TextareaAutosize as Textarea } from "@mui/material";
import styles from "../../style/Style";

const Summary = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} sm:min-w-[500px]`}>
      <textarea
        type="text"
        className=" border-dimWhite/70  rounded-lg text-[20px] w-full px-4 py-5  border focus:border-none"
        
      />
    </div>
  );
};
export default Summary;
