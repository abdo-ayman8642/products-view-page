import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "Product 1",
    image: "../src/assets/first.jpg",
    price: 29.99,
  },
  {
    id: 2,
    name: "Product 2",
    image: "../src/assets/download (2).jpg",
    price: 19.99,
  },
  {
    id: 3,
    name: "Product 3",
    image: "../src/assets/download (3).jpg",
    price: 39.99,
  },
  {
    id: 4,
    name: "Product 1",
    image: "../src/assets/download.jpg",
    price: 29.99,
  },
  {
    id: 5,
    name: "Product 2",
    image: "../src/assets/download.jpg",
    price: 19.99,
  },
  {
    id: 6,
    name: "Product 3",
    image: "../src/assets/first.jpg",
    price: 39.99,
  },
  {
    id: 7,
    name: "Product 1",
    image: "../src/assets/download (2).jpg",
    price: 29.99,
  },
  {
    id: 8,
    name: "Product 2",
    image: "../src/assets/download (3).jpg",
    price: 19.99,
  },
  {
    id: 9,
    name: "Product 3",
    image: "../src/assets/download.jpg",
    price: 39.99,
  },
  // Add more products as needed
];

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
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
