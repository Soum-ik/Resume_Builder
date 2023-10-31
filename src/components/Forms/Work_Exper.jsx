import { TextField } from "@mui/material";

const Working_Exp = () => {
  return (
    <form
      onChange={(e) => e.preventDefault()}
      className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10"
    >
      <div className="">
        <TextField fullWidth={true} required label="Job Tittle" />
      </div>
      <div className="">
        <TextField fullWidth={true} type="text" required label="Job Details" />
      </div>
      <div className="">
        <TextField
          fullWidth={true}
          required
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          label="Start Date"
        />
      </div>
      <div className="">
        <TextField
          fullWidth={true}
          required
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          label="End Date"
        />
      </div>
    </form>
  );
};
export default Working_Exp;
