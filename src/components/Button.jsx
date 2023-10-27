import { Link } from "react-router-dom";
const Button = ({ text, width, page, style }) => (
  <button
    className={`botton p-1 sm:p-2 xxxS:px-4 xxxS:py-3 sm:rounded-lg rounded-md font-semibold text-[17px] list-none ${width} ${
      style &&
      "absolute md:top-48 md:left-32 md:hidden md:group-hover:block hidden"
    }`}
  >
    <Link to={page}> {text} </Link>
  </button>
);

export default Button;
