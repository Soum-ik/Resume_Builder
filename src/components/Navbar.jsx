import Logo from "../image/logo.png";
import { useState } from "react";
import { AiOutlineAlignRight } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={` flex items-center justify-between w-full drop-shadow-lg`}>
      <img src={Logo} className=" w-[180px] -my-14" alt="" />
      <ul className=" hidden sm:flex justify-between items-center  gap-4 cursor-pointer select-none">
        <li className=" hover:bg-slate-900/5 px-4 py-3 rounded-md text-[17px] text-secondary font-medium">
          Log In
        </li>
        <li className="botton px-4 py-3 rounded-lg font-semibold text-[17px] ">
          Sing Up
        </li>
      </ul>
      {/* moblie part */}
      <div>

      </div>
    </div>
  );
};

export default Nav;
