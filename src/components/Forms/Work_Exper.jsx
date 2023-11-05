import { TextField } from "@mui/material";
import { useState } from "react";

const Working_Exp = () => {
  const [work_Expe, setWork_Expe] = useState({
    company: "",
    jobRole: "",
    jobDetails: "",
    startDate: "",
    endDate: "",
  });
  console.log(work_Expe);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWork_Expe({
      ...work_Expe,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10"
    >
      <div className="">
        <TextField
          fullWidth={true}
          name="company"
          required
          label="Company"
          onChange={handleInputChange}
        />
      </div>
      <div className="">
        <TextField
          fullWidth={true}
          name="jobRole"
          required
          label="Job Role"
          onChange={handleInputChange}
        />
      </div>
      <div className="">
        <TextField
          fullWidth={true}
          type="text"
          required
          name="jobDetails"
          label="Job Details"
          onChange={handleInputChange}
        />
      </div>
      {/* <dd> */}
      <div className="">
        <TextField
          name="startDate"
          fullWidth={true}
          requiredonChange={handleInputChange}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          label="Start Date"
        />
      </div>
      <div className="">
        <TextField
          name="endDate"
          fullWidth={true}
          required
          type="date"
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
          label="End Date"
        />
      </div>
      <button
        type="submit"
        className=" max-w-xs border py-2 px-3 rounded-md  bg-primary hover:bg-primary/90 text-white 
      "
      >
        Submit
      </button>
    </form>
  );
};
export default Working_Exp;
