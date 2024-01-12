import { TextField } from "@mui/material";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import toast,{Toaster} from "react-hot-toast";
const Project = () => {
  const localData = localStorage.getItem("project");
  const parseData = JSON.parse(localData);
  const { name, details, technology, git, live } = parseData || {};

  const [project, setProject] = useState({
    name: name,
    details: details,
    technology: technology,
    git: git,
    live: live,
  });

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    localStorage.setItem("project", JSON.stringify(project));
    toast.success("Successfuly toasted")
  }, [project]);

  const submitingAll = () => {
    handleClick();
    handleClickRouting();
  };

  const handleClickRouting = () => {
    navigate("/Resume");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="grid grid-cols-1 sm:grid-cols-3 gap-8"
    ><Toaster
    position="top-center"
    reverseOrder={true}
  />
      <div className="">
        <TextField
          value={project.name}
          fullWidth={true}
          onChange={handleInputChange}
          label="Project Name"
          name="name"
        />
      </div>
      <div className=" md:col-span-2 ">
        <TextField
          value={project.details}
          name="details"
          fullWidth={true}
          onChange={handleInputChange}
          label="Project details"
        />
      </div>
      <div>
        <TextField
          value={project.technology}
          name="technology"
          onChange={handleInputChange}
          fullWidth={true}
          label="Technology"
        />
      </div>
      <div className=" ">
        <TextField
          value={project.live}
          onChange={handleInputChange}
          fullWidth={true}
          type="url"
          label="Live link"
          name="live"
        />
      </div>
      <div>
        <TextField
          value={project.git}
          name="git"
          className=""
          fullWidth={true}
          type="url"
          label="GitHub link"
          onChange={handleInputChange}
        />
      </div>
      <button
        onClick={submitingAll}
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
