import React from "react";

import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";

interface navListProps {
  name: string;
  link: string;
}

const Navbar = () => {
  const OpenCart = () => {
    console.log("cart");
  };
  const OpenUser = () => {
    console.log("cart");
  };

  return (
    <>
      <div className="h-6 max-w-5xl mx-auto sticky top-0" />
      <header
        id="header"
        className="max-w-5xl mx-auto flex justify-between items-center sticky top-0 z-20 py-2 bg-white bg-opacity-95 "
      >
        <div className="flex w-full justify-between px-3 items-center text-[#1D242D] ">
          <Desktop />
          <Mobile />
        </div>
      </header>
      <div className="h-2" />
    </>
  );
};

export default Navbar;
