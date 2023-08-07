import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Products.css";
import { products } from "../utils/services/data";

const ProductSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="product-slider-container">
      <h1 className="slider-header">You May Also Like</h1>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
