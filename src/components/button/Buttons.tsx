import { ReactNode } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonIconProps = {
  icon?: ReactNode;
  onClick?: () => void;
  text?: string;
  disabled?: boolean;
};

type SlideNavButtonProps = {
  prevClick?: () => void;
  nextClick?: () => void;
  disabled?: boolean;
};

export const ButtonsIcon = ({ icon, text, onClick }: ButtonIconProps) => {
  return (
    <button
      title={text}
      className="px-2 sm:text-xl text-2xl hover:text-red-500"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export const ButtonsIconText = ({ icon, text, onClick }: ButtonIconProps) => {
  return (
    <button
      className="flex justify-between items-center rounded-md font-semibold capitalize gap-3 text-base w-full py-2 px-4 text-[#1D242D] bg-white active:bg-[#1D242D] active:bg-opacity-70 active:text-white hover:bg-[#1D242D] hover:bg-opacity-70 hover:text-white"
      onClick={onClick}
    >
      <h5 className="whitespace-nowrap text-inherit sm:text-base text-lg">
        {text}
      </h5>
      <div className="text-lg">{icon}</div>
    </button>
  );
};

export const SlideNavButton = ({
  prevClick,
  nextClick,
  disabled,
}: SlideNavButtonProps) => {
  return (
    <div className="absolute right-0 top-0 sm:m-3 my-10 mx-5 p-2 rounded-md bg-white text-opacity-30">
      <button
        className={`w-6 active:opacity-20  ${disabled ? "opacity-30" : null}`}
        onClick={prevClick}
        disabled={disabled}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className={`w-6 active:opacity-20  ${disabled ? "opacity-30" : null}`}
        onClick={nextClick}
        disabled={disabled}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export const Button = ({ text, onClick }: ButtonIconProps) => {
  return (
    <button
      className="text-white bg-[#1D242D] px-3 py-1 rounded-md hover:bg-opacity-80"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
