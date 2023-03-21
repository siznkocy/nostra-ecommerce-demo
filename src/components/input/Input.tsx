import { ChangeEvent, ReactNode, useRef } from "react";

type InputIconProps = {
  icon?: ReactNode;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
};

export const InputIcons = ({
  icon,
  placeholder,
  onChange,
  type,
}: InputIconProps): any => {
  return (
    <div className="flex flex-nowrap gap-2 items-center bg-[#F9FBFC] px-2 rounded-md h-10 border-2 border-gray-200 text-gray-400 focus:border-[#1D242D]  hover:bg-opacity-20 hover:text-[#1D242D] hover:border-[#1D242D] hover:text-opacity-90">
      <span className="text-lg">{icon}</span>
      <input
        type={type}
        className="px-1 text-[#1D242D] bg-inherit hover:bg-inherit focus:outline-none focus:border-none"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export const InputIconLine = ({
  icon,
  placeholder,
  onChange,
  type,
}: InputIconProps) => {
  return (
    <div className="flex flex-nowrap gap-2 items-center bg-[#F9FBFC] h-10 border-b-2 border-gray-200 text-gray-400 active:border-[#1D242D] focus:bg-opacity-20 focus:text-[#1D242D] focus:border-[#1D242D] focus:text-opacity-90  hover:bg-opacity-20 hover:text-[#1D242D] hover:border-[#1D242D] hover:text-opacity-90">
      <span className="text-lg">{icon}</span>
      <input
        type={type}
        className="px-1 w-full text-[#1D242D] bg-inherit hover:bg-inherit focus:outline-none focus:border-none"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
