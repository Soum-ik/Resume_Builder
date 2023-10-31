import { TextField } from "@mui/material";

const Education = () => {
  return (
    <form
      onChange={(e) => e.preventDefault()}
      className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10"
    >
      <div className="">
        <TextField fullWidth={true} required label="Collage name" />
      </div>
      <div className="">
        <TextField fullWidth={true} label="School name" />
      </div>
      <div className="">
        <TextField fullWidth={true} type="text" label="Degree" />
      </div>
      <div className="">
        <TextField fullWidth={true} type="text" label="Degree" />
      </div>
      <div className="grid grid-cols-2 gap-10">
        <TextField
          type="date"
          fullWidth={false}
          InputLabelProps={{
            shrink: true,
          }}
          label="Graduation Start Date"
        />
        <TextField
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          label="Graduation end Date"
        />
      </div>
    </form>
  );
};
export default Education;
