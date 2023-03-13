import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { SlideNavButton } from "./button/Buttons";

export const Featured = () => {
  const featured = [
    {
      url: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Best Seller",
      name: "Autumn Dress",
      sale: 0.6,
      price: 85,
    },
    {
      url: "https://images.pexels.com/photos/6764032/pexels-photo-6764032.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Shop men",
      name: "White Shirt",
      price: 85,
    },
    {
      url: "https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Shop Women",
      name: "Skirt",
      price: 85,
    },
    {
      url: "https://images.pexels.com/photos/6765164/pexels-photo-6765164.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Best Seller",
      name: "Vents",
      sale: 0.6,
      price: 185,
    },
    {
      url: "https://images.pexels.com/photos/6311447/pexels-photo-6311447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Shop men",
      name: "Hoods",
      sale: 0.6,
      price: 85,
    },
    {
      url: "https://images.pexels.com/photos/6311326/pexels-photo-6311326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Shop Women",
      name: "Plain Shirt",
      price: 85,
    },
  ];

  const prevSlider = () => {
    console.log("");
  };

  const nextSlider = () => {
    console.log("");
  };

  return (
    <section>
      <div className="relative">
        <h2>Featured Products</h2>
        <div className="hidden lg:inline">
          <SlideNavButton prevClick={prevSlider} nextClick={nextSlider} />
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-6">
        {featured.map((item, i) => (
          <article
            key={i}
            className="sm:min-w-[20rem] min-w-[14rem] sm:w-[32%] overflow-clip"
          >
            <div
              className="w-full aspect-square rounded-md relative"
              style={{
                backgroundImage: `url(${item.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {item.sale && (
                <div className="m-2 p-2 bg-red-500 w-fit absolute rounded-md">
                  <p className="uppercase text-white font-semibold ">Sale</p>
                </div>
              )}
            </div>
            <div className="flex   justify-between pt-4">
              <div className="flex flex-col">
                <h5>{item.name}</h5>
                {!item.sale ? (
                  <h6>${item.price}</h6>
                ) : (
                  <div className="flex gap-2">
                    <h6>${item.price * item.sale}</h6>
                    <h5 className="line-through opacity-40">${item.price}</h5>
                  </div>
                )}
              </div>
              <div>
                <button className="bg-[#1D242D] text-white p-4 rounded-md">
                  <BsCartPlus />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
