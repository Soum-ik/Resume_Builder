import { TextField } from "@mui/material";
import { useState, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";
// export const work_ExpeData = work_Expe();

const Working_Exp = () => {
  const localData = localStorage.getItem("work_Expe");
  const parseData = JSON.parse(localData);
  const { company, jobRole, jobDetails, startDate, endDate } = parseData || {};

  const [work_Expe, setWork_Expe] = useState({
    company: company,
    jobRole: jobRole,
    jobDetails: jobDetails,
    startDate: startDate,
    endDate: endDate,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWork_Expe({
      ...work_Expe,
      [name]: value,
    });
  };

  const handleClick = useCallback(() => {
    localStorage.setItem("work_Expe", JSON.stringify(work_Expe));
    toast.success("Successfully toasted");
  }, [work_Expe]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10"
    >
      <Toaster position="top-center" reverseOrder={true} />
      <div className="">
        <TextField
          value={work_Expe.company}
          fullWidth={true}
          name="company"
          required
          label="Company"
          onChange={handleInputChange}
        />
      </div>
      <div className="">
        <TextField
          value={work_Expe.jobRole}
          fullWidth={true}
          name="jobRole"
          required
          label="Job Role"
          onChange={handleInputChange}
        />
      </div>
      <div className="">
        <TextField
          value={work_Expe.jobDetails}
          fullWidth={true}
          type="text"
          required
          name="jobDetails"
          // maxRows={3}
          label="Job Details"
          onChange={handleInputChange}
        />
      </div>
      {/* <dd> */}
      <div className="">
        <TextField
          value={work_Expe.startDate}
          name="startDate"
          fullWidth={true}
          required
          type="date"
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
          label="Start Date"
        />
      </div>
      <div className="">
        <TextField
          value={work_Expe.endDate}
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
      {
        <button
          onClick={handleClick}
          type="submit"
          className=" max-w-xs border py-2 px-3 rounded-md  bg-primary hover:bg-primary/90 text-white 
      "
        >
          Submit
        </button>
      }
    </form>
  );
};
export default Working_Exp;
