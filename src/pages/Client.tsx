import React from "react";
import { Slider } from "../components/Slider";
import { Services } from "../components/Services";
import Curated from "../components/Curated";
import { Featured } from "../components/Featured";
import Sales from "../components/Sales";
import { Subscribe } from "../components/Subscribe";

const Client = () => {
  return (
    <section className="max-w-5xl mx-auto px-2">
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
