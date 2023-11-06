import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

const Personal_Info_Formes = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    number: "",
    github: "",
    twitter: "",
    facebook: "",
    linkdin: "",
    // :"",
  });

  const handleInputChange = (e) => {
    console.log(personalInfo);
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  useEffect(() => {
      
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" grid grid-cols-1 grid-flow-row-dense md:grid-cols-2 gap-10"
      >
        <div className="">
          <TextField
            fullWidth={true}
            required
            name="name"
            label="Enter Your Name "
            onSubmit={handleInputChange}
          />
        </div>
        <div className="">
          <TextField
            fullWidth={true}
            required
            name="email"
            onChange={handleInputChange}
            label="Enter Your Email"
          />
        </div>

        <div>
          <TextField
            name="number"
            fullWidth={true}
            label="Number"
            onChange={handleInputChange}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="">
          <TextField
            name="github"
            fullWidth={true}
            type="url"
            label="GitHub"
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <TextField
            name="twitter"
            fullWidth={true}
            label="Twitter"
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <TextField
            name="facebook"
            fullWidth={true}
            label="Facebook"
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <TextField
            name="linkdin"
            fullWidth={true}
            label="Linkdin"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className=" text-[21px] focus:m-[1px] focus:max-w-[320px] max-w-xs border py-2 px-3 rounded-md  bg-primary hover:bg-primary/90 text-white 
      "
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Personal_Info_Formes;
