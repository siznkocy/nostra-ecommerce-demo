import React from "react";
import { ButtonsIconText } from "./button/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Sales = () => {
  return (
    <div className="border flex md:flex-row flex-col rounded-md overflow-clip">
      {/* <div className="md:w-2/5 aspect-[5/2] bg-green-400 md:block hidden"> */}
      <img
        src="https://images.pexels.com/photos/5886006/pexels-photo-5886006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="pic"
        className="md:w-2/5 aspect-[5/2] bg-green-400 md:block hidden object-cover"
      />
      {/* </div> */}
      <div className="md:w-3/5 w-full  h-full bg-[#1D242D] p-8 flex flex-col space-y-4 justify-between items-center md:items-start">
        <p className="text-white uppercase">Limited Offer</p>
        <h2 className="text-4xl text-white">
          35% off only this friday and get special gift
        </h2>
        <div className="w-44">
          <ButtonsIconText
            text="grab it now"
            icon={<FontAwesomeIcon icon={faArrowRight} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Sales;
