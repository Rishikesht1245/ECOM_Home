import React from "react";
import Banner from "../components/UI/Banner";
import {
  kidProducts,
  mentProducts,
  productDetails,
  womensProducts,
} from "../constants/dummy";
import ProductLayout from "../components/layouts/ProductLayout";

const HomePage = () => {
  return (
    <main className="flex flex-col">
      {/* Carousel Banner */}
      <Banner />

      {/* Latest arrivals */}
      <ProductLayout
        heading="Latest arrivals"
        border={true}
        products={productDetails}
      />

      {/* Womens Products */}
      <ProductLayout
        heading="For Womens"
        border={false}
        products={womensProducts}
      />

      {/* Mens Products */}
      <ProductLayout heading="For Mens" border={true} products={mentProducts} />

      {/* Kids Products */}
      <ProductLayout heading="For Kids" border={false} products={kidProducts} />
    </main>
  );
};

export default HomePage;
