import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import ProductCard from "../UI/ProductCard";

const ProductLayout = ({ heading, products, border }) => {
  return (
    <div className={`flex w-[85%] xs:w-[90%] lg:w-full flex-col justify-between items-center mt-20 mx-auto ${border ? "border p-4 rounded-md":"" }`}>
      <h1 className={`text-xl text-start mb-10 mt-5 ${border ? "mt-5" : ""}`}>{heading}</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 md:gap-10 my-5 w-full">
        {products.map((item) => (
          <ProductCard key={item?.id} listing={item} />
        ))}
      </div>
      <Link to="/men">
        <Button className="my-5">View More</Button>
      </Link>
    </div>
  );
};

export default ProductLayout;
