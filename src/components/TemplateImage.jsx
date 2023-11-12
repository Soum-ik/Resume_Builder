import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Template_Img from "../asset/resume.jpg";
import Template_Img2 from "../asset/resume6.webp";
import Template_Img3 from "../asset/resume5.jpg";
import Button from "./Button";

const Template = ({ img }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []); // Add an empty dependency array to ensure the effect runs only once

  return loading ? (
    <Skeleton height={600} placeholder="loading"/>
  ) : (
    <div className="relative group">
      {img === "Template_Img" ? (
        <img
          className="aspect-square relative h-fit object-cover group-hover:blur-[2px] rounded-md"
          src={Template_Img}
          alt="Template Image"
        />
      ) : img === "Template_Img2" ? (
        <img
          src={Template_Img2}
          className="aspect-square relative object-cover h-fit group-hover:blur-[2px] rounded-md"
          alt="Template Image 2"
        />
      ) : (
        <img
          src={Template_Img3}
          className="aspect-square relative object-cover h-fit group-hover:blur-[2px] rounded-md"
          alt="Template Image 3"
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
