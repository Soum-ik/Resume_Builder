import { TextField } from "@mui/material";
import { useState, useCallback } from "react";

const Personal_Info_Formes = () => {
  const localData = localStorage.getItem("personalInfo");
  const parseData = JSON.parse(localData);
  const { name, email, number, github, twitter, linkdin } = parseData || {};

  const [personalInfo, setPersonalInfo] = useState({
    name: name,
    email: email,
    number: number,
    github: github,
    twitter: twitter,
    linkdin: linkdin,
  });

  const handleClick = useCallback(() => {
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
  }, [personalInfo]);

  const handleInputChange = useCallback((e) => {
    console.log(personalInfo);
    const { name, value } = e.target;
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo,
      [name]: value,
    }));
  }, []);

  // stop auto reload
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" grid grid-cols-1 grid-flow-row-dense md:grid-cols-2 gap-10"
      >
        <div>
          <TextField
            fullWidth={true}
            value={personalInfo?.name}
            required
            name="name"
            onChange={handleInputChange}
            label="Enter Your Name"
          />
        </div>
        <div className="">
          <TextField
            fullWidth={true}
            value={personalInfo?.email}
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
            value={personalInfo?.number}
            onChange={handleInputChange}
            type="number"
            // value={}
            // itemType=""
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="">
          <TextField
            name="github"
            value={personalInfo?.github}
            fullWidth={true}
            type="url"
            label="GitHub"
            onChange={handleInputChange}
          />
        </div>
        <div className="">
          <TextField
            name="twitter"
            value={personalInfo?.twitter}
            fullWidth={true}
            label="Twitter"
            onChange={handleInputChange}
          />
        </div>

        <div className="">
          <TextField
            name="linkdin"
            value={personalInfo?.linkdin}
            fullWidth={true}
            label="Linkdin"
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
    </>
  );
};
export default Personal_Info_Formes;
