import styles from "../../../style/Style";
import Nav from "../../../Navbar/Navbar";
import Projects from "./project";
import Details from "./details";
import Working from "./working";

const Template1 = () => {
  return (
    <div className={`${styles.paddingX}`}>
      <Nav />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        {/* <button>Download</button> */}
        <div className={`${styles.boxWidth} ${styles.marginY}`}>
          <h1 className={`${styles.heading2}  text-center uppercase`}>
            Soumik Sarkar Ratul
          </h1>
          <h3 className=" text-center text-[35px] font-extralight">
            Fontend Developer
          </h3>
          <hr className=" pt-10 h-10" />
          <div className=" grid grid-cols-2 gap-10 pt-10">
            {/* left  part*/}
            <div className=" text-right ">
              <Details
                name={"contact"}
                number={"1902839201 43287"}
                email={"sarkarsoumik214@gmail.com"}
                github={"https://www.github.com"}
                linkdin={"https://www.linkdin.com"}
                twitter={"https://www.twiter.com"}
                instragram={"https://www.instragram.com"}
              />
              <Details
                start_time={"20223"}
                end_time={"2024"}
                name={"education"}
                collage={"sylhet polytechnic institute"}
                degree={"Computer Science Engineering"}
              />

              <div className=" pt-5 pb-5">
                <h3 className=" uppercase font-bold">Education</h3>
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
              <Details
                name={"summary"}
                summary={`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Perferendis non dicta, aliquam corporis recusandae deserunt
                    quaerat nesciunt reprehenderit voluptatem dolorem odio
                    repellat earum excepturi expedita totam itaque, explicabo
                    delectus quam!`}
              />

              <div className=" pt-5 pb-5">
                <h3 className=" uppercase font-bold">Working Exprience</h3>
                <hr />
                <Working
                  Name={"Font-end developer"}
                  dic={`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Perferendis non dicta, aliquam corporis recusandae deserunt
                    quaerat nesciunt reprehenderit voluptatem dolorem odio
                    repellat earum excepturi expedita totam itaque, explicabo
                    delectus quam!`}
                  subName={"Google"}
                  start={2022}
                  end={2024}
                />
                <Working
                  Name={"Back-end developer"}
                  dic={`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Perferendis non dicta, aliquam corporis recusandae deserunt
                    quaerat nesciunt reprehenderit voluptatem dolorem odio
                    repellat earum excepturi expedita totam itaque, explicabo
                    delectus quam!`}
                  subName={"Microsoft"}
                  start={2032}
                  end={2044}
                />
              </div>

              <div className=" pt-5 pb-5">
                <h3 className=" uppercase font-bold">Projects</h3>
                <hr />
                <Projects
                  Name={"To do List"}
                  dic={`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Perferendis non dicta, aliquam corporis recusandae deserunt
                    quaerat nesciunt reprehenderit voluptatem dolorem odio
                    repellat earum excepturi expedita totam itaque, explicabo
                    delectus quam!`}
                  git={"https:/www.github.com"}
                  live={"https://live.com"}
                  tech={"React, Tailwind Css, Fire Base"}
                />
                <Projects
                  Name={"Resume Builder"}
                  dic={`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Perferendis non dicta, aliquam corporis recusandae deserunt
                    quaerat nesciunt reprehenderit voluptatem dolorem odio
                    repellat earum excepturi expedita totam itaque, explicabo
                    delectus quam!`}
                  git={"https:/www.github.com"}
                  live={"https://live.com"}
                  tech={"React, Tailwind Css, Fire Base, Metarial ui"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Template1;
