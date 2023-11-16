import {
  AiFillGoogleCircle,
  AiOutlineArrowRight,
  AiFillFacebook,
  AiOutlineMail,
} from "react-icons/ai";

const System = ({ name, icon }) => {
  function checker() {
    if (icon === "Facebook") {
      return <AiFillFacebook size={30} />;
    } else if (icon === "Google") {
      return <AiFillGoogleCircle size={30} />;
    } else {
      return <AiOutlineMail size={30} />;
    }
  }

  const icons = checker();

  return (
    <button
      type="submit"
      className={` last:pb-10 cursor-pointer min-w-[250px] ss:min-w-[300px] sm:min-w-[350px] md:min-w-[400px] mt-5 flex flex-1 flex-row items-center justify-between bg-slate-400/25 hover:bg-slate-400/40 duration-500 px-5 py-3 rounded-xl`}
    >
      <div className=" gap-2 flex flex-1 items-center justify-start" onClick={}>
        {icons}
        <h2 className=" text-secondary font-medium ">{name}</h2>
      </div>
      <AiOutlineArrowRight />
    </button>
  );
};
export default System;
