import styles from "../style/Style";
import { Contants } from "../Contants/contant";
const Jobs = () => {
  return (
    <div className={`${styles.marginX} `}>
      <div className=" text-center">
        <h5 className="text-primary font-medium ">
          PROFESSIONAL RESUME BUILDER
        </h5>
        <h1 className="text-secondary  text-center font-bold text-[20px] xs:text-[30px] ss:text-[40px] sm:text-[50px] lg:text-[60px]">
          Win your dream job
        </h1>
      </div>
      <div className={`${styles.paddingY} grid grid-cols-1 gap-4 sm:grid-cols-2`}>
        {Contants.map((Contant) => (
          <div
            key={Contant.id}
            className={`${styles.flexCenter} ${styles.boxWidth} gap-6 sm:m-6 m-3`}
          >
            <img className=" w-[30px] " src={Contant.Image} alt="" />
            <div className=" flex flex-1 flex-col flex-wrap">
              <h3 className=" text-secondary font-semibold">
                {Contant.titlte}
              </h3>
              <h6 className=" text-dimWhite">{Contant.subTittle}</h6>
            </div>
            {/* <hr /> */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Jobs;
