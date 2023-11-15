import { useEffect, useState } from "react";
import styles from "../style/Style";
import Button from "./Button";

const Hero = () => {
  const [member, setMember] = useState(1);

  useEffect(() => {
    const timeing = setInterval(() => {
      setMember(member + 1);
    }, 20000);
    return () => clearInterval(timeing);
  });

  return (
    <div className={`${styles.marginX} `}>
      <div className={`${styles.paddingY} ${styles.flexStart}`}>
        <div className=" flex  justify-center items-center flex-col">
          <h4 className=" text-primary font-medium ">ONLINE RESUME BUILDER</h4>
          <h1 className="  text-secondary leading-[2rem] xxxS:leading-[2rem] ss:leading-[3.3rem] sm:leading-[3rem] md:leading-[4rem] min-w-[270px] ss:max-w-[600px] sm:max-w-[700px] lg:max-w-[850px] text-center font-bold text-[25px] xs:text-[30px] ss:text-[40px] sm:text-[50px] lg:text-[60px]  ">
            3% of resumes pass the initial application.{" "}
            <span className=" text-primary rotate-12"> Be in 3%.</span>
          </h1>

          <p
            className={`${styles.paragraph} text-center text-[14px] leading-[1.3rem] sm:text-[18px] py-2 xs:py-5`}
          >
            Create your professional resume in 5 minutes.
          </p>

          <Button
            page={"/templatesPage"}
            text="Create you resume"
            width={"px-5"}
          />

          <p className=" mt-10 flex items-center justify-center">
            <div className=" rounded-full animate-pulse w-2 h-2 bg-green-500 pl-2 "></div>
            {"  " + member + "  "}
            resumes created today
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
