import { TextField } from "@mui/material";

const Personal_Info_Formes = () => {
  return (
    <form
      onChange={(e) => e.preventDefault()}
      className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10"
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
    </form>
  );
};
export default Personal_Info_Formes;
