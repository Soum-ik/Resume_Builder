import styles, { layout } from "../style/Style";
import Resume from "../../public/images/resume.svg";
import { Motivations } from "../Contants/contant";
  
import Button from "../components/Button";
import Footer from "./Footer";

const Discreption = () => { 
  return (
    <div className={` ${styles.boxWidth}`}>
      <div className={`${layout.section} gap-10`}>
        <img src={Resume} alt="" />
        <div className="pt-10">
          <h5 className=" text-primary font-semibold">RESUME MAKER</h5>
          <h2 className="text-[40px] font-bold leading-[3rem] max-w-[500px]">
          Building the Foundation for a Successful Career Starts with a{" "}
            <span className="text-primary">Solid Resume</span>
          </h2>
          <p className=" py-5 md:py-10 text-dimWhite">{Motivations}</p>
          <Button page={"/templatesPage"} text={"Create a Resume"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Discreption;
