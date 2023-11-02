import { TextField } from "@mui/material";
// import { useEffect  , useRef } from "react";
import { useState } from "react";

const Personal_Info_Formes = () => {
  // const [name, setName] = useState("name");
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
          <TextField fullWidth={true} required label="Enter Your Name " />
        </div>
        <div className="">
          <TextField fullWidth={true} required label="Enter Your Email" />
        </div>

        <div>
          <TextField
            fullWidth={true}
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="">
          <TextField fullWidth={true} type="url" label="GitHub" />
        </div>
        <div className="">
          <TextField fullWidth={true} label="Twitter" />
        </div>
        <div className="">
          <TextField fullWidth={true} type="url" label="Instragram" />
        </div>
        <div className="">
          <TextField fullWidth={true} label="Facebook" />
        </div>
        <div className="">
          <TextField fullWidth={true} label="Linkdin" />
        </div>
        <button
          type="submit"
          className=" max-w-xs border py-2 px-3 rounded-md  bg-primary hover:bg-primary/90 text-white 
      "
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Personal_Info_Formes;
