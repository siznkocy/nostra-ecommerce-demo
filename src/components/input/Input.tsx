import { ReactNode } from "react";

type InputIconProps = {
  icon: ReactNode;
  placeholder: string;
};

export const InputIcons = ({ icon, placeholder }: InputIconProps): any => {
  return (
    <div className="flex flex-nowrap gap-2 items-center bg-[#F9FBFC] px-2 rounded-md h-10 border-2 border-gray-200 text-gray-400">
      <span className="text-lg">{icon}</span>
      <input
        type="text"
        className="px-1 bg-inherit text-black focus:outline-none focus:border-none"
        placeholder={placeholder}
      />
    </div>
  );
};
