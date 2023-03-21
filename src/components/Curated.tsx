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

  return (
    <section className="space-y-10 my-10  ">
      <h2>Curated picks</h2>
      <div className="flex flex-wrap gap-5 justify-center">
        {curated.map((item, i) => (
          <article
            key={i}
            className="lg:w-[23%] sm:w-[47%] w-full lg:aspect-square aspect-[4/1] rounded-md"
            style={{
              backgroundImage: `url(${item.url})`,
              backgroundColor: "lightgray",
              backgroundSize: "cover",
            }}
          >
            <div className="h-full w-ful flex flex-col m-7">
              <div className="mx-auto mt-auto w-full max-w-xs">
                <ButtonsIconText
                  text={item.text}
                  icon={<FontAwesomeIcon icon={faArrowRight} />}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Curated;
