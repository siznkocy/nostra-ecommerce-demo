import React from "react";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaDolly } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faDolly,
  faFaceSmileWink,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  const services = [
    {
      icon: <FontAwesomeIcon icon={faCircleDollarToSlot} />,
      title: "Original products",
      desc: "We provide money back guarantee if the product are no original",
    },
    {
      icon: <FontAwesomeIcon icon={faFaceSmileWink} />,
      title: "Satisfaction guarantee",

      desc: "Exchange the product you've purchased if it doesn't fit on you",
    },
    {
      icon: <FontAwesomeIcon icon={faDolly} />,
      title: "New arrival everyday",
      desc: "We updates our collection almost everyday",
    },
    {
      icon: <FontAwesomeIcon icon={faTruckFast} />,
      title: "Fast & free shipping",
      desc: "We offer fast and free shipping for our loyal customers",
    },
  ];

  return (
    <section className="space-y-10 my-10">
      <article className="flex md:flex-row flex-col justify-between">
        <div className="md:text-left  text-center">
          <h2>We provide best</h2>
          <h2>Customer experiences</h2>
        </div>
        <div className="border-[#1D242D] border-l-2 flex items-center">
          <h4 className="ml-8">
            We ensure our consumers have the best shopping experience
          </h4>
        </div>
      </article>
      <article className="flex flex-wrap gap-6 justify-center">
        {services.map((service, i) => (
          <div key={i} className="sm:w-[22%] w-[44%] mx-auto">
            <div className="text-2xl text-[#1D242D] text-opacity-60 text-center rounded-md py-3 px-4 bg-black bg-opacity-5 w-fit">
              {service.icon}
            </div>
            <div>
              <h3 className="capitalize whitespace-normal">{service.title}</h3>
            </div>
            <div>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
