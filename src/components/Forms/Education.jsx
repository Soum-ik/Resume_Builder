import { TextField } from "@mui/material";
import { useState, useEffect, useCallback } from "react";

const getData = () => {
  let personalInfo = localStorage.getItem("education");
  if (personalInfo) {
    return JSON.parse(localStorage.getItem("education"));
  } else {
    return [];
  }
};

const Education = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [education, setEducation] = useState(
    {
      collage: "",
      school: "",
      degree: "",
      // : "",
      startdate: "",
      enddate: "",
    } && getData()
  );

  const handleClick = useCallback(() => {
    localStorage.setItem("education", JSON.stringify(education));
  }, [education]);

  const handleInputChange = (e) => {
    console.log(education);
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value,
    });
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10"
    >
      <div className="">
        <TextField
          name="collage"
          fullWidth={true}
          required
          label="Collage name"
          onChange={handleInputChange}
        />
      </div>
      <div className="">
        <TextField
          name="school"
          fullWidth={true}
          label="School name"
          onChange={handleInputChange}
        />
      </div>
      <div className="">
        <TextField
          name="degree"
          fullWidth={true}
          type="text"
          label="Degree"
          onChange={handleInputChange}
        />
      </div>
      {/* <div className="">
        <TextField fullWidth={true} type="text" label="Degree" />
      </div> */}
      <div className="grid grid-cols-2 gap-10">
        <TextField
          type="date"
          fullWidth={false}
          InputLabelProps={{
            shrink: true,
          }}
          label="Graduation Start Date"
          name="startdate"
          onChange={handleInputChange}
        />
        <TextField
          name="enddate"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          label="Graduation end Date"
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        onClick={handleClick}
        className=" text-[21px] focus:m-[1px] focus:max-w-[320px] max-w-xs border py-2 px-3 rounded-md  bg-primary hover:bg-primary/90 text-white 
      "
      >
        Submit
      </button>
    </form>
  );
};
export default Education;
