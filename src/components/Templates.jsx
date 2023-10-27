import styles from "../style/Style";
import Template_Img from "./Template";
import Footer from "./Footer";

const Template = () => {
  return (
    <div className={`${styles.marginX}`}>
      <div className={` ${styles.boxWidth} md:${styles.paddingY}`}>
        <div className=" space-y-4">
          <h4 className="text-primary font-medium ">RESUME TEMPLATES</h4>
          <h2 className=" text-[40px] text-secondary font-bold leading-[3rem]">
            Select your job-winning resume template
          </h2>
          <h5 className=" text-dimWhite/70 text-[18px]">
            Create your resume in 5 minutes.
          </h5>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-10">
          <Template_Img img={"Template_Img"}/>
          <Template_Img img={""}/>
          <Template_Img img={""}/>
          <Template_Img img={""}/>
        </div>
        <div
          className={` rounded-xl ${styles.marginY} ${styles.marginX} bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
        >
          <div className={`${styles.flexCenter} ${styles.padding}`}>
            <h1
              className={`${styles.heading2} text-white max-w-[800px] text-[20px] sm:text-[30px] text-center`}
            >
              Boost your career.{" "}
              <span className=" text-secondary/70 font-bold ">
                {" "}
                Start using Hello_Builder today
              </span>
            </h1>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Template;
