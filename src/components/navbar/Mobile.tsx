import React from "react";
import { Logo } from "./NavData";
import { ButtonsIcon } from "../button/Buttons";
import { BsCart2 } from "react-icons/bs";
import { BiMenu, BiUser } from "react-icons/bi";

export const Mobile = () => {
  return (
    <nav className="flex w-full lg:hidden justify-between">
      <Logo />
      <div>
        <ButtonsIcon icon={<BsCart2 />} text={"Cart"} />
        <ButtonsIcon icon={<BiUser />} text={"Profile"} />
        <ButtonsIcon icon={<BiMenu />} text={"Menu"} />
      </div>
    </nav>
  );
};
