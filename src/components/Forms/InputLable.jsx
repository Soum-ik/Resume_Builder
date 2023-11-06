import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { BiPlusMedical } from "react-icons/bi";

const InputLabel = ({ label }) => {
  const [skills, setSkills] = useState([""]);


  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from reloading
    // Handle form submission logic here
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="grid grid-cols-1 md:grid-cols-2 gap-10"
    >
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
