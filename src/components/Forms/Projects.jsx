import { TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const [project, setProject] = useState({
    name: "",
    details: "",
    technology: "",
    git: "",
    live: "",
  });

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Resume");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInputChange = (e) => {
    // console.log(personalInfo);
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="grid grid-cols-1 sm:grid-cols-3 gap-8"
    >
      <div className="">
        <TextField
          fullWidth={true}
          onChange={handleInputChange}
          label="Project Name"
          name="name"
        />
      </div>
      <div className=" md:col-span-2 ">
        <TextField
          name="details"
          fullWidth={true}
          className=" "
          onChange={handleInputChange}
          label="Project details"
        />
      </div>
      <div>
        <TextField
          name="technology"
          onChange={handleInputChange}
          fullWidth={true}
          label="Technology"
        />
      </div>
      <div className=" ">
        <TextField
          onChange={handleInputChange}
          fullWidth={true}
          type="url"
          label="Live link"
        />
      </div>
      <div>
        <TextField
          name="git"
          className=" "
          fullWidth={true}
          type="url"
          label="GitHub link"
          onChange={handleInputChange}
        />
      </div>
      <button
        onClick={handleClick}
        type="submit"
        name="live"
        className=" max-w-xs border py-2 px-3 rounded-md  bg-primary hover:bg-primary/90 text-white 
      "
      >
        Submit
      </button>
    </form>
  );
};
export default Project;
