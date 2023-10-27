import Template_Img from "../asset/resume.jpg";
import Template_Img2 from "../asset/resume1.jpg";
import Template_Img3 from "../asset/resume3.jpg";
import Button from "./Button";

const Template = ({ img }) => {
  return (
    <div className=" relative group">
      {img === "Template_Img" ? (
        <img src={Template_Img} />
      ) : (
        <img src={Template_Img2} />
      )  }
      <Button style={true} text={"Use the Templet"} />
    </div>
  );
};
export default Template;
