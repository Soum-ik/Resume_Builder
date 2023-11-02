import Template_Img from "../asset/resume.jpg";
import Template_Img2 from "../asset/resume6.webp";
import Template_Img3 from "../asset/resume5.jpg";
import Button from "./Button";

const Template = ({ img }) => {
  return (
    <div className=" relative group">
      {img === "Template_Img" ? (
        <img
          className=" aspect-square h-fit object-cover  group-hover:blur-[2px] rounded-md"
          src={Template_Img}
        />
      ) : img === "Template_Img2" ? (
        <img
          src={Template_Img2}
          className="aspect-square object-cover h-fit group-hover:blur-[2px] rounded-md"
        />
      ) : (
        <img
          src={Template_Img3}
          className="aspect-square object-cover  h-fit group-hover:blur-[2px] rounded-md"
        />
      )}
      <Button
        page={"/createResumePage"}
        style={true}
        text={"Use the Template"}
      />
    </div>
  );
};
export default Template;
