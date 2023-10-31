import { TextField } from "@mui/material";

const Project = () => {
  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div>
        <TextField fullWidth={true} label="Project Name" />
      </div>
      <div>
        <TextField
          fullWidth={true}
          className=" col-span-2"
          label="Project details"
        />
      </div>
      <div>
        <TextField fullWidth={true} label="Technology" />
      </div>
      <div>
        <TextField fullWidth={true} type="url" label="Live link" />
      </div>
      <div>
        <TextField fullWidth={true} type="url" label="GitHub link" />
      </div>
    </form>
  );
};
export default Project;
