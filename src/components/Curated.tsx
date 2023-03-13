import React from "react";
import { ButtonsIconText } from "./button/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Curated = () => {
  const curated = [
    {
      url: "https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Best Seller",
    },
    {
      url: "https://images.pexels.com/photos/6764032/pexels-photo-6764032.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Shop men",
    },
    {
      url: "https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Shop Women",
    },
    {
      url: "https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Shop Casual",
    },
  ];

  // gugu lukhele
  // sanele jele

  return (
    <section className="space-y-10 my-10  ">
      <h2>Curated picks</h2>
      <div className="flex flex-wrap gap-5 justify-center">
        {curated.map((item, i) => (
          <article
            key={i}
            className="flex flex-col  lg:w-[23%] md:w-[30%] sm:w-[47%] w-full sm:aspect-square aspect-[3/1] rounded-md"
            style={{
              backgroundImage: `url(${item.url})`,
              backgroundSize: "cover",
            }}
          >
            <div className="mx-auto mt-auto mb-5 px-8 w-full max-w-xs">
              <ButtonsIconText
                text={item.text}
                icon={<FontAwesomeIcon icon={faArrowRight} />}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Curated;
