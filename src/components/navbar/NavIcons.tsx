import React from "react";
import { ButtonsIcon } from "../button/Buttons";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { BiMenu, BiSearch, BiUser } from "react-icons/bi";
import { currentMenuState, mobileMenu } from "../../features/menu/menuSlice";
import { useSelector, useDispatch } from "react-redux";
import { searchBar } from "../../features/menu/popupSlice";

export const NavIcons = () => {
  // const dispatch = useAppDispatch();
  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch(mobileMenu());
  };

  const openSearchBar = () => {
    console.log("Search bar");
    dispatch(searchBar());
  };

  return (
    <div className="text-4xl items-center flex gap-1">
      <div className="flex relative">
        <div className="absolute -top-1 left-5 w-4 aspect-square bg-red-500 rounded-full text-xs grid place-content-center text-white">
          1
        </div>
        <ButtonsIcon icon={<FiShoppingCart />} text={"Cart"} />
      </div>
      <ButtonsIcon icon={<AiOutlineUser />} text={"Profile"} />
      <div className="flex lg:hidden">
        <ButtonsIcon
          icon={<BiSearch />}
          text={"login"}
          onClick={openSearchBar}
        />
        <ButtonsIcon
          icon={<AiOutlineMenu />}
          text={"Menu"}
          onClick={openMenu}
        />
      </div>
    </div>
  );
};
