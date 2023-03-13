"use client";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";

type ButtonIconProps = {
  icon?: ReactNode;
  onClick?: () => void;

  text?: string;
};

export const ButtonsIcon = ({ icon, text, onClick }: ButtonIconProps) => {
  return (
    <button title={text} className="px-2 sm:text-lg text-2xl" onClick={onClick}>
      {icon}
    </button>
  );
};

export const ButtonsIconText = ({ icon, text, onClick }: ButtonIconProps) => {
  return (
    <button
      className="flex justify-between items-center rounded-md font-semibold capitalize gap-3 text-base w-full py-2 px-4 text-[#1D242D] bg-white"
      onClick={onClick}
    >
      <h5 className="whitespace-nowrap md:text-inherit sm:text-base text-lg">
        {text}
      </h5>
      {icon}
    </button>
  );
};

type SlideNavButtonProps = {
  prevClick?: () => void;
  nextClick?: () => void;
};

export const SlideNavButton = ({
  prevClick,
  nextClick,
}: SlideNavButtonProps) => {
  return (
    <div className="absolute right-0 top-0 sm:m-3 my-10 mx-5 p-2 rounded-md bg-white text-opacity-30">
      <button className="w-6" onClick={prevClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="w-6" onClick={nextClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export const Button = ({ text }: ButtonIconProps) => {
  return (
    <button className="text-white bg-[#1D242D] px-3 py-1 rounded-md">
      {text}
    </button>
  );
};
