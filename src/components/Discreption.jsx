import styles, { layout } from "../style/Style";
import Resume from "../asset/resume.svg";
import {Motivations} from "../Contants/contant";
import { useState } from "react";
import Button from "../components/Button"

const Discreption = () => {
  const [short, setShort] = useState(false)
  return (
    <div className={` ${styles.boxWidth}`}>
      <div className={`${layout.section} gap-10`}>
        <img src={Resume} alt="" />
        <div className="pt-10">
          <h5 className=" text-primary font-semibold">RESUME MAKER</h5>
          <h2 className="text-[40px] font-bold leading-[3rem] max-w-[500px]">Every Great Career Begins with a <span className="text-primary">Solid Resume</span></h2>
          <p className="py-10 text-dimWhite">{Motivations}</p>
          <Button text={"Create a Resume"}/>
        </div>
      </div>
      <div className={`${styles.marginX} ${styles.flexCenter} bg-primary/5`}>
        Build and Develop by Soumik
      </div>
    </div>
  );
};
export default Discreption;
