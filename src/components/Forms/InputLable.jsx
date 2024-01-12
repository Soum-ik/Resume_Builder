import React, { useState, useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { BiPlusMedical } from "react-icons/bi";
import toast,{Toaster} from "react-hot-toast";

const InputLabel = ({ label }) => {
  const [skills, setSkills] = useState([""]);
  console.log(skills);

  const handleClick = useCallback(() => {
    localStorage.setItem("inputlab", JSON.stringify(skills));
    toast.success("Successfully toast");
  }, [skills]);

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      <Toaster position="top-center" reverseOrder={true} />
      {skills.map((skill, index) => (
        <div key={index}>
          <TextField
            fullWidth
            label={label}
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
          />
        </div>
      ))}
      <div>
        <Button
          className="text-center"
          variant="text"
          color="primary"
          onClick={handleAddSkill}
        >
          <BiPlusMedical />
          {"  "} add more {label}
        </Button>
      </div>
      <button
        onClick={handleClick}
        type="submit"
        className=" text-[21px] focus:m-[1px] focus:max-w-[320px] max-w-xs border py-2 px-3 rounded-md  bg-primary hover:bg-primary/90 text-white 
      "
      >
        Submit
      </button>
    </form>
  );
};

export default InputLabel;
