import { useState } from "react";
import Logo from "../asset/logo.png";
import Button from "./Button";

const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);
  //   function handleChange() {
  //     setIsOpen(!isOpen);
  //   }
  return (
    <div className={` flex items-center justify-between w-full drop-shadow-lg`}>
      <img src={Logo} className=" w-[180px] -my-14 " alt="" />
      <ul className=" hidden sm:flex justify-between items-center  gap-4 cursor-pointer select-none">
        <li className=" hover:bg-slate-900/5 px-4 py-3 rounded-md text-[17px] text-secondary font-medium">
          <a href="">Log In</a>
        </li>
        <li className="botton px-4 py-3 rounded-lg font-semibold text-[17px] ">
          <a href="">Sing Up</a>
        </li>
      </ul>
      {/* moblie part */}
      <div className=" sm:hidden flex  justify-end items-center">
       <Button text="Sing Up"/>
      </div>
    </div>
  );
};

export default Nav;
