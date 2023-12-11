import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
// all these should be removed with data fetching according to category
import { mentProducts, womensProducts, kidProducts, productDetails } from "../constants/dummy";
import ReviewSlider from "../components/UI/ReviewSlider";
import Button from "../components/UI/Button";
import ProductLayout from "../components/layouts/ProductLayout";

const ProductListing = () => {
  const { category, id } = useParams();
  const [currentImage, setCurrentImage] = useState("");

  // filter data based on Id and category : needs to be replaced with single product fetching api.
  const currentProduct = useMemo(() => {
    if (category === "mens") return mentProducts.find((item) => item.id == id);
    else if (category === "womens")
      return womensProducts.find((item) => item.id == id);
    else if (category === "kids")
      return kidProducts.find((item) => item.id == id);
  }, [category, id]);

  return (
    <div className="flex flex-col w-full max-w-[1300px]">
      {/* Product details section  */}
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-4 h-full mt-10 sm:mt-16 pb-10 bg-gray-100 p-4">
        <div className="h-full md:col-span-2">
          {/* images selection  */}
          <div className="flex items-center justify-center xl:justify-between gap-1 xs:gap-10">
            {/* Side images */}
            <div className="flex flex-col gap-2 md:max-w-[1/5] sm:max-w-[1/3]">
              {currentProduct &&
                currentProduct?.src?.map((image, index) => (
                  <div
                    key={`image${index}`}
                    className="border border-slate-200 rounded-sm p-1 hover:bg-green-200"
                    onClick={() => setCurrentImage(image)}
                  >
                    <img
                      className="w-24 h-24 object-cover"
                      src={image}
                      alt={image}
                    />
                  </div>
                ))}
            </div>
            {/* side images ends here */}

            {/* Main image */}
            <div className="h-full lg:h-[500px]">
              <img
                className="w-full h-full object-cover"
                src={currentImage || currentProduct?.src[0]}
                alt="/static/media/bestSellerOne.988208d74cc332fccc11.webp"
              />
            </div>
          </div>
          {/* images */}
        </div>

        {/* Product details section */}
        <div
          className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center
      "
        >
          <div className="flex flex-col gap-5">
            <h2 className="text-lg md:text-4xl xs:text-xl font-semibold">
              {currentProduct?.productName}
            </h2>
            <div className="flex justify-start items-center gap-3">
              <p className="text-green-500 text-xl font-semibold mt-2 flex items-center">
                ₹{" "}
                {Math.round(
                  currentProduct?.price -
                    currentProduct?.price *
                      (currentProduct?.offerPercentage / 100)
                )}
              </p>
              <p className="text-red-500 line-through text-md font-semibold mt-2 flex items-center">
                ₹ {currentProduct?.price}
              </p>
              <p className="text-gray-400 text-sm font-semibold mt-2 flex items-center italic">
                {currentProduct?.offerPercentage} % Offer
              </p>
            </div>
            <p className="text-base text-gray-600">
              {currentProduct?.description ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicexcepturi quibusdam odio deleniti reprehenderit facilis."}
            </p>
            <p className="font-medium text-lg">
              <span className="font-normal">Color :</span>
              {currentProduct?.color || "Black and White"}
            </p>
            <button className="w-full py-2 sm:py-4 border bg-primary hover:bg-black duration-300 text-white text-lg rounded-md">
              Add to Cart
            </button>
            <p className="font-normal text-sm">
              <span className="text-base font-medium"> Categories:</span>{" "}
              {`${category.toUpperCase()} Products, Dresses, T-Shirts, Pants`}
            </p>
          </div>
        </div>
      </div>

      {/* Review Section*/}
      <div className="flex flex-col max-w-[100vw] p-4 mt-8 sm:mt-10 gap-5">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <ReviewSlider reviews={currentProduct?.ratings} />
          <p className="w-[200px] cursor-pointer font-semibold hover:text-blue-700 text-gray-600">Add Review <span className="hover:translate-x-1">⟶</span></p>
      </div>

      {/* Similar Products Section */}
       <ProductLayout
        heading="Similar Products"
        border={true}
        products={productDetails}
      />
    </div>
  );
};

export default ProductListing;
