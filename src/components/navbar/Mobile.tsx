import { useState } from "react";
import { Logo, menu } from "./NavData";
import { NavIcons } from "./NavIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ButtonsIcon } from "../button/Buttons";
import { mobileMenu, currentMenuState } from "../../features/menu/menuSlice";
import { useAppDispatch, useAppSelector } from "../../hook/useApp";

export const MobileSubmenu = () => {
  const dispatch = useAppDispatch();
  const mobileMenuIsOpen = useAppSelector(currentMenuState);

  const close = () => {
    dispatch(mobileMenu());
  };

  return (
    <div
      className={`w-full h-screen bg-[#1D242D] bg-opacity-90 absolute top-0 right-0 z-20 lg:hidden  ${
        mobileMenuIsOpen
          ? "transform duration-200 ease-in translate-x-0"
          : "translate-x-full"
      }`}
    >
      <div className="px-8 py-5  text-white w-full flex justify-end">
        <ButtonsIcon
          icon={<FontAwesomeIcon icon={faClose} />}
          onClick={close}
        />
      </div>
      {menu.map((first, i) => (
        <ul
          className="mx-20"
          key={i}
          onClick={() => {
            console.log("first", i);
          }}
        >
          {first.map((second, i) => (
            <li key={i} className="my-5 text-white">
              {second.map((third, i) => (
                <p
                  key={i}
                  className={`first:flex text-white ${"hidden"} first:text-lg first:font-semibold font-light first:border-b capitalize first:border-red-500 w-fit cursor-pointer items-center gap-5`}
                >
                  {third}
                </p>
              ))}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export const Mobile = () => {
  return (
    <nav className="flex w-full lg:hidden justify-between">
      <Logo />
      <NavIcons />
    </nav>
  );
};
