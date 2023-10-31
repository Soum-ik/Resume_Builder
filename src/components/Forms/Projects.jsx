import { TextField } from "@mui/material";

const Project = () => {
  return (
    <form className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div className="">
        <TextField fullWidth={true} label="Project Name" />
      </div>
      <div className=" md:col-span-2 ">
        <TextField fullWidth={true} className=" " label="Project details" />
      </div>
      <div>
        <TextField fullWidth={true} label="Technology" />
      </div>
      <div className=" ">
        <TextField fullWidth={true} type="url" label="Live link" />
      </div>
      <div>
        <TextField className=" " fullWidth={true} type="url" label="GitHub link" />
      </div>
    </form>
  );
};
export default Project;
