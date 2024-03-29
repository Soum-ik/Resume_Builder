import { TextField } from "@mui/material";
import { useState, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";

const Education = () => {
  const localData = localStorage.getItem("education");
  const parseData = JSON.parse(localData);
  const { collage, degree, startdate, enddate } = parseData || {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [education, setEducation] = useState({
    collage: collage,
    degree: degree,
    startdate: startdate,
    enddate: enddate,
  });

  const handleClick = useCallback(() => {
    localStorage.setItem("education", JSON.stringify(education));
    toast.success("Successfully toasted!");
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
          value={education?.collage}
          name="collage"
          fullWidth={true}
          required
          label="Collage name"
          onChange={handleInputChange}
        />
      </div>
      <div className="">
        <TextField
          value={education?.degree}
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
          value={education?.startdate}
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
          value={education?.enddate}
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
      <Toaster position="top-center" reverseOrder={true} />
    </form>
  );
};
export default Education;
