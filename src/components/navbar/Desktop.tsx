import React from "react";
import { DropDown, Logo, NavList } from "./NavData";
import { InputIcons } from "../input/Input";
import { BsCart2, BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { ButtonsIcon } from "../button/Buttons";

export const Desktop = () => {
  return (
    <nav className="lg:flex justify-between items-center w-full hidden relative">
      <Logo />
      <NavList />
      <div className="flex gap-2 items-baseline">
        <InputIcons placeholder={"Search"} icon={<BsSearch />} />
        <ButtonsIcon icon={<BsCart2 />} text={"Cart"} />
        <ButtonsIcon icon={<BiUser />} text={"Profile"} />
      </div>
      <DropDown />
    </nav>
  );
};
