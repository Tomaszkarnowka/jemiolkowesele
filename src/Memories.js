import React from "react";
import Carousel from "./Carousel";
const slides = [
  "zdj  4.6.jpg",
  "zdj 4,6.jpg",
  "zdj 4,7...jpg",
  "zdj 4.0 .jpg",
  "zdj 4.0.jpg",
  "zdj 4.2.jpg",
  "zdj 4.3.jpg",
  "zdj 4.4.jpg",
  "zdj 4.5.jpg",
  "zdj 4.7..jpg",
  "zdj 4.8 .jpg",
  "zdj 4.9 .jpg",
  "zdj 4.9a.jpg",
  "zdj 4.10.jpg",
  "zdj 4.11.jpg",
];

function Memories() {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <p className="text-7xl mb-6 leading-10 font-script">Nasze wspomnienia</p>
      <div className="max-w-lg mx-4">
        <Carousel autoSlide={true}>
          {slides.map((s) => (
            <img src={s} alt={`${s}`} className="border-2 border-RAL9003" />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Memories;
