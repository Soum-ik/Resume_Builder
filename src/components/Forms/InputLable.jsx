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

  return (
    <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {skills.map((skill, index) => (
        <>
          <div key={index}>
            <TextField
              fullWidth
              label={label}
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
            />
          </div>
        </>
      ))}
      <div>
        <Button
          className=" text-center"
          variant="text"
          color="primary"
          onClick={handleAddSkill}
        >
          <BiPlusMedical />
          {"  "} add more {label}
        </Button>
      </div>
    </form>
  );
};

export default InputLabel;
