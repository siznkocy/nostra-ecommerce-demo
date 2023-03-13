import React from "react";
import { Logo } from "../navbar/NavData";
import { FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { SiVisa } from "react-icons/si";

export const Footer = () => {
  const footer = [
    {
      name: "Shop",
      list: [
        { name: "All Collection" },
        { name: "Winter Edition" },
        { name: "Discount" },
      ],
    },
    {
      name: "Company",
      list: [{ name: "About us" }, { name: "Contact" }, { name: "Affiliates" }],
    },
    {
      name: "Support",
      list: [
        { name: "FAQs" },
        { name: "Cookie Policy" },
        { name: "Terms of Use" },
      ],
    },
    {
      name: "Payment methods",
      icon: [
        <FaCcMastercard className="bg-gradient-to-r text-orange-500" />,
        <SiVisa className="text-blue-800" />,
        <FaCcPaypal className="text-blue-500" />,
      ],
    },
  ];

  return (
    <section className="bg-[#EAEEF2] m-0 flex flex-col gap-0 space-y-0">
      <footer className="max-w-5xl mx-auto gap-8 flex md:flex-row items-start flex-col justify-between px-4 pt-8 border-b-2 border-slate-200 m-0">
        <div className="flex flex-col md:items-start items-center gap-2 md:w-2/6 w-full">
          <Logo />
          <p className="text-xs text-[#989EA3] my-3 font-medium font-Montserrat">
            Specialized in proving high-quality, stylish products for your
            wardrobe.
          </p>
        </div>
        <div className="flex md:gap-5 gap-2 md:flex-row justify-center flex-wrap md:w-3/5 w-full bg-green-30">
          {footer.map((item, i) => (
            <div
              key={i}
              className="lg:w-[20%] md:w-[40%] md:text-start text-center w-full bg-red-30"
            >
              <h3 className="uppercase text-sm whitespace-nowrap ">
                {item.name}
              </h3>
              <>
                {item?.list && (
                  <ul>
                    {item.list?.map((lit, i) => (
                      <li
                        key={i}
                        className="text-xs text-[#989EA3] my-3 font-medium font-Montserrat"
                      >
                        {lit?.name}
                      </li>
                    ))}
                  </ul>
                )}
                {item?.icon && (
                  <ul className="flex justify-around">
                    {item.icon?.map((icon, i) => (
                      <li
                        key={i}
                        className="text-lg text-[#989EA3] my-3 font-medium font-Montserrat"
                      >
                        {icon}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            </div>
          ))}
        </div>
      </footer>
      <div className="flex justify-center items-center bg-red-70 h-10">
        <p className="text-center text-xs font-normal">
          Copyright ©2022 Nostra. All right reserved
        </p>
      </div>
    </section>
  );
};
