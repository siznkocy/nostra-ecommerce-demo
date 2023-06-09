"use client";
import React, { ReactNode, useEffect, useState } from "react";
import {
  ButtonsIconText,
  SlideNavButton,
} from "../../components/button/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

type sliderProps = {
  children?: ReactNode;
};

// wrapper for the slides.
const SliderWrapper = ({ children = <p>Nothing</p> }: sliderProps) => {
  return (
    <section className="bg-gray-300 w-full  rounded-md lg:aspect-[4/2] sm:aspect-[5/3] aspect-[3/4]  flex flex-col justify-center relative overflow-clip">
      {children}
    </section>
  );
};

// Skeleton component.
export const SliderSkeleton = () => {
  return (
    <SliderWrapper>
      <div className="h-full w-full animate-pulse flex flex-col justify-center items-center px-4">
        <SlideNavButton
          disabled={true}
          prevClick={() => console.log("loading")}
          nextClick={() => console.log("loading")}
        />
        <div className="w-full mx-auto">
          <div className="bg-white bg-opacity-60 rounded-md w-11/12 h-14 my-1"></div>
          <div className="bg-white bg-opacity-60 rounded-md  w-3/6 mx-auto h-14 px-1"></div>
        </div>
      </div>
    </SliderWrapper>
  );
};

// Slider component.
export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const navigate = useNavigate();

  const images = [
    {
      title: "Level up your style with our summer collection",
      url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Available for women, men and kids",
      url: "https://images.unsplash.com/photo-1517453802135-cfebc7c35cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc0fHxjbG90aGVzJTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Be unique, be bold, tame your style",
      url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHdvbWVuJTIwY2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Our biggest sale. Yet!",
      url: "https://images.unsplash.com/photo-1629582626803-26d116398eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Available for women, men and kids",
      url: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZhbWlseSUyMGNsb3RoaW5nJTIwJTIwbW9kZWxoaW5nbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Stock up for winter season",
      url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const clicking = () => {
    navigate("/shop");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <SliderWrapper>
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `linear-gradient(hsla(0, 0%, 0%, 0.3),hsla(0, 0%, 0%, 0.3)), url(${images[currentIndex].url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <SlideNavButton prevClick={prevSlider} nextClick={nextSlider} />

        {/* <div className="m-auto md:mb-20 mb-5 mx-auto max-w-4xl flex flex-col gap-5"> */}
        <div className="absolute w-full left-0 bottom-0 flex flex-col h-4/6">
          <h1 className="text-white text-center sm:text-6xl text-3xl  font-semibold  my-auto">
            {images[currentIndex].title}
          </h1>
          <div className="w-fit mx-auto lg:mb-28 sm:mb-16 mb-6 space-y-5">
            <ButtonsIconText
              text={"Shop now"}
              icon={<FontAwesomeIcon icon={faArrowRight} onClick={clicking} />}
            />
            <div className="mx-auto w-fit flex gap-2 items-center">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={` ${
                    i === currentIndex
                      ? "bg-white w-3 border-2 border-black border-opacity-40"
                      : "bg-white w-2 aspect-square "
                  }   rounded-full  aspect-square`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SliderWrapper>
  );
};
