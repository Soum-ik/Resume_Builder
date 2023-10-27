import { Link } from "react-router-dom";
const Button = ({ text, width, page, style }) => (
  <button
    className={`botton p-1 sm:p-2 xxxS:px-4 xxxS:py-3 sm:rounded-lg rounded-md font-semibold text-[17px] list-none ${width} ${
      style && "absolute top-48 left-32 hidden group-hover:block"
    }`}
  >
    <Link to={page} href="">
      {text}
    </Link>
  </button>
);

export default Button;
