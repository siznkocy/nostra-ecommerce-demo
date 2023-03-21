import React from "react";
import { Slider, SliderSkeleton } from "../features/products/Slider";
import { Services } from "../components/Services";
import Curated from "../components/Curated";
import { Featured } from "../features/products/Featured";
import Sales from "../features/products/Sales";
import { Subscribe } from "../components/Subscribe";

const Client = () => {
  return (
    <section className="max-w-5xl mx-auto px-2">
      {/* <SliderSkeleton /> */}
      <Slider />
      <Services />
      <Curated />
      <Featured />
      <Sales />
      <Subscribe />
    </section>
  );
};

export default Client;
