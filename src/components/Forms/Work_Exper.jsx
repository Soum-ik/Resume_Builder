import { TextField } from "@mui/material";
// import { TextareaAutosize as Textarea } from "@mui/base/TextareaAutosize";

const Working_Exp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10"
    >
      <div className="">
        <TextField fullWidth={true} required label="Company" />
      </div>
      <div className="">
        <TextField fullWidth={true} required label="Job Role" />
      </div>
      <div className="">
        <TextField fullWidth={true} type="text" required label="Job Details" />
      </div>
      {/* <dd> */}
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
      <button
        type="submit"
        className=" max-w-xs border py-2 px-3 rounded-md  bg-primary hover:bg-primary/90 text-white 
      "
      >
        Submit
      </button>
    </form>
  );
};
export default Working_Exp;
