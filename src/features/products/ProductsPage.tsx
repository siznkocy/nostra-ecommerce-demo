import React from "react";
import ProductsList from "./ProductsList";

const Filter = () => {
  return <div className="bg-red-500 outline-dotted">Filter</div>;
};

const ProductsPage = () => {
  return (
    <div className="max-w-5xl mx-auto h-screen w-full flex items-start outline">
      <Filter />
      <ProductsList />
      <ProductsList />
      <Filter />
    </div>
  );
};

export default ProductsPage;
