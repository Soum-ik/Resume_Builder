import styles from "../../style/Style";
import { useCallback, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const Summary = () => {
  const localData = localStorage.getItem("summary");
  const parseData = JSON.parse(localData);

  const [dics, setDics] = useState(parseData);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = useCallback(() => {
    localStorage.setItem("summary", JSON.stringify(dics));
    toast.success("Success toasted");
  }, [dics]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Toaster position="top-center" reverseOrder={true} />
      <div
        className={`${styles.paddingX} ${styles.flexCenter} sm:min-w-[500px]`}
      >
        <textarea
          rows={10}
          placeholder="Write something about you?"
          value={dics}
          onChange={(e) => setDics(() => e.target.value)}
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
