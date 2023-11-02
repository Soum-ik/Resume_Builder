// import { TextareaAutosize as Textarea } from "@mui/material";
import { useState } from "react";
import styles from "../../style/Style";

const Summary = () => {
  const [summary, setSummary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from reloading
    // Handle form submission logic here
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className={`${styles.paddingX} ${styles.flexCenter} sm:min-w-[500px]`}>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Write something about you?"
          type="text"
          className="border-dimWhite/70 text-secondary/75 rounded-lg text-[18px] w-full px-4 py-5 border focus:border-none"
        />
      </div>
      <button
        type="submit"
        className="max-w-xs border py-2 px-3 mt-10 ml-16 rounded-md bg-primary hover:bg-primary/90 text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default Summary;
