import { FaUser } from "react-icons/fa";
import Logo from "../asset/logo.png";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authSetUp";
import { CiLogout } from "react-icons/ci";
const Nav = () => {
  const navitage = useNavigate();
  const { user, googleAuthSingOut } = useAuth();
  return (
    <div className={` flex items-center justify-between w-full drop-shadow-lg`}>
      <Link to={"/"}>
        <img src={Logo} className=" w-[180px] -my-14 " alt="" />
      </Link>
      <ul className=" hidden sm:flex justify-between items-center  gap-4  select-none">
        {user ? (
          <>
            <Link
              onLoad={navitage("/")}
              className=" uppercase  gap-3  items-center flex justify-center"
            >
              <FaUser /> <span> {user}</span>
            </Link>
            <h1 onClick={googleAuthSingOut}>
              <CiLogout />
            </h1>
          </>
        ) : (
          <>
            <li className="cursor-pointer hover:bg-slate-900/5 px-4 py-3 rounded-md text-[17px] text-secondary font-medium">
              <Link to="/logInPage">Log In</Link>
            </li>
            <li className="cursor-pointer botton px-4 py-3 rounded-lg font-semibold text-[17px] ">
              <Link to="/singUppage">Sing Up</Link>
            </li>
          </>
        )}
      </ul>
      {/* moblie part */}

      {user ? (
        <Link
          onLoad={navitage("/")}
          className=" sm:hidden uppercase gap-3  items-center flex justify-center"
        >
          <FaUser /> {user} <CiLogout />
        </Link>
      ) : (
        <div
          onClick={navitage("/singUppage")}
          className=" sm:hidden flex  justify-end items-center"
        >
          <Button page={"/singUppage"} text="Sing Up" />
        </div>
      )}
    </div>
  );
};

export default Nav;
