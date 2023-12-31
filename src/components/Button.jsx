import { Link } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
const Button = ({ text, width, page, style }) => (
  <button
    className={`botton p-1 sm:p-2 xxxS:px-4 xxxS:py-3 sm:rounded-lg rounded-md font-semibold text-[17px] list-none ${width} ${
      style &&
      "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 hidden group-hover:block "
    }`}
  >
    <Link to={page}> {text} </Link>
  </button>
);

export default Button;
