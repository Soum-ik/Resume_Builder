import { TextField } from "@mui/material";

const Education = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
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
export default Education;
