import Logo from "../asset/logo.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className={` flex items-center justify-between w-full drop-shadow-lg`}>
      <Link to={"/"}>
        <img src={Logo} className=" w-[180px] -my-14 " alt="" />
      </Link>
      <ul className=" hidden sm:flex justify-between items-center  gap-4  select-none">
        <li className="cursor-pointer hover:bg-slate-900/5 px-4 py-3 rounded-md text-[17px] text-secondary font-medium">
          <Link to="/logInPage">Log In</Link>
        </li>
        <li className="cursor-pointer botton px-4 py-3 rounded-lg font-semibold text-[17px] ">
          <Link to="/singUppage">Sing Up</Link>
        </li>
      </ul>
      {/* moblie part */}
      <div className=" sm:hidden flex  justify-end items-center">
        <Button page={"/singUppage"} text="Sing Up" />
      </div>
    </div>
  );
};

export default Nav;
