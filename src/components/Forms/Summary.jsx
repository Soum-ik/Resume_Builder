// import { TextareaAutosize as Textarea } from "@mui/material";
import { useState } from "react";
import styles from "../../style/Style";
import { useCallback } from "react";

// get data from localStorage
const getData = () => {
  let summary = localStorage.getItem("summary");
  if (summary) {
    return JSON.parse(localStorage.getItem("summary"));
  } else {
    return [];
  }
};

const Summary = () => {
  const [summary, setSummary] = useState(getData());
  const handleClick = useCallback(() => {
    localStorage.setItem("summary", JSON.stringify(summary));
  }, [summary]);

  const handleInputChange = useCallback((e) => {
    setSummary(e.target.value);
  });
  console.log(summary);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from reloading
    // Handle form submission logic here
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div
        className={`${styles.paddingX} ${styles.flexCenter} sm:min-w-[500px]`}
      >
        <textarea
          rows={10}
          value={summary}
          onChange={(e) => handleInputChange(e)}
          placeholder="Write something about you?"
          type="text"
          className="border-dimWhite/70 hover:border-black focus:outline-none focus:ring-2 focus:border-blue-700  text-secondary/75 rounded-lg text-[18px] w-full px-4 py-5 border focus:border-none "
        />
      </div>
      <button
        onClick={handleClick}
        type="submit"
        className="max-w-xs focus:max-w-[319px] border py-2 px-3 mt-10 ml-16 rounded-md bg-primary hover:bg-primary/90 text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default Summary;
