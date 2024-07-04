import React from "react";
import Carousel from "./Carousel";
const slides = [
  "memories1.jpg",
  "memories2.jpg",
  "memories3.jpg",
  "memories4.jpg",
  "memories5.jpg",
  "memories6.jpg",
  "memories7.jpg",
  "memories8.jpg",
  "memories9.jpg",
  "memories10.jpg",
  "memories11.jpg",
  "memories15.jpg",
  "memories17.jpg",
  "memories18.jpg",
];

function Memories() {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <p className="text-7xl mb-6 leading-10 font-script">Nasze wspomnieniaa</p>
      <div className="max-w-lg mx-4">
        <Carousel autoSlide={true}>
          {slides.map((s) => (
            <img
              src={s}
              alt={`${s}`}
              className="border-2 border-RAL9003 object-cover"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Memories;
