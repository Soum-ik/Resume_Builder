import styles from "../../../style/Style";
import Projects from "./project";
import Details from "./details";
import Working from "./working";
import {
  EducationData,
  summaryData,
  projectData,
  personalInfoData,
  work_ExpeData,
} from "./fetchLocalStorageData";
import { useRef } from "react";
import ReactToPrint from "react-to-print";

const MainTemplate1 = () => {
  const template = useRef(0);
  return (
    <>
      <div
        ref={template}
        className={`${styles.paddingX} ${styles.flexCenter} flex-col`}
      >
        <div className={`${styles.boxWidth} ${styles.marginY}`}>
          <h1 className={`${styles.heading2}  text-center uppercase`}>
            {personalInfoData.name}
          </h1>
          <h3 className=" text-center text-[30px] sm:text-[35px] font-extralight">
            {work_ExpeData.jobRole}
          </h3>
          <hr className=" pt-10 print:pt-2 h-10" />
          <div className=" grid grid-cols-1 ss:grid-cols-2 gap-10 pt-10">
            {/* left  part*/}
            <div className=" ss:text-right">
              <Details
                name={"contact"}
                number={personalInfoData.number}
                email={personalInfoData.email}
                github={personalInfoData.github}
                linkdin={personalInfoData.linkdin}
                twitter={personalInfoData.twitter}
                instragram={personalInfoData.instragram}
              />
              <Details
                start_time={EducationData.startdate}
                end_time={EducationData.enddate}
                name={"education"}
                collage={EducationData.collage}
                degree={EducationData.degree}
              />

              <div className=" pt-5 pb-5">
                <h3 className=" uppercase font-bold">Skills</h3>
                <hr />
                <div className="text-[15px] space-y-2 font-normal pt-2">
                  <p>react</p>
                  <p>JS</p>
                  <p>Fire Base</p>
                </div>
              </div>
              <div className=" pt-5 pb-5">
                <h3 className=" uppercase font-bold">language</h3>
                <hr />
                <div className="text-[15px] space-y-2 font-normal pt-2">
                  <p>Bnagla</p>
                  <p>Enlish</p>
                  <p>German</p>
                </div>
              </div>
            </div>
            {/* right part */}
            <div className="text-left">
              <Details name={"summary"} summary={summaryData} />

              <div className=" pt-5 pb-5">
                <h3 className=" uppercase font-bold">Working Exprience</h3>
                <hr />
                <Working
                  Name={work_ExpeData.company}
                  dic={work_ExpeData.jobDetails}
                  subName={work_ExpeData.jobRole}
                  start={work_ExpeData.startDate}
                  end={work_ExpeData.endDate}
                />
                {/* <Working
                        Name={"Back-end developer"}
                        dic={`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Perferendis non dicta, aliquam corporis recusandae deserunt
                            quaerat nesciunt reprehenderit voluptatem dolorem odio
                            repellat earum excepturi expedita totam itaque, explicabo
                            delectus quam!`}
                        subName={"Microsoft"}
                        start={2032}
                        end={2044}
                        /> */}
              </div>

              <div className=" pt-5 pb-5">
                <h3 className=" uppercase font-bold">Projects</h3>
                <hr />
                <Projects
                  Name={projectData.name}
                  dic={projectData.details}
                  git={projectData.git}
                  live={projectData.live}
                  tech={projectData.technology}
                />
                {/* <Projects
                        Name={"Resume Builder"}
                        dic={`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Perferendis non dicta, aliquam corporis recusandae deserunt
                            quaerat nesciunt reprehenderit voluptatem dolorem odio
                            repellat earum excepturi expedita totam itaque, explicabo
                            delectus quam!`}
                        git={"https:/www.github.com"}
                        live={"https://live.com"}
                        tech={"React, Tailwind Css, Fire Base, Metarial ui"}
                        /> */}
              </div>
            </div>
          </div>
        </div>
        <ReactToPrint
          
          removeAfterPrint={true}
          content={() => template.current}
          trigger={() => (
            <button className=" print:hidden botton p-1 sm:p-2 xxxS:px-4 xxxS:py-3 mb-5 sm:rounded-lg rounded-md font-semibold text-[17px] list-none">
              Download
            </button>
          )}
        />
      </div>
    </>
  );
};
export default MainTemplate1;
