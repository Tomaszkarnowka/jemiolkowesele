import React from "react";
import { FaHeart } from "react-icons/fa";

function ThankYou() {
  return (
    <div className="text-center mx-8 flex flex-col mb-10">
      <h2 className="text-7xl mb-6 font-script leading-10">
        Życzenie Młodej Pary
      </h2>
      <p className="mb-8">
        Na koniec mamy do Was prośbę o pomoc w utrwaleniu tych wspaniałych
        wspomnień, które dziś tworzymy. Poniżej znajdziecie link do dysku, gdzie
        możecie wrzucić zdjęcia i filmiki, abyśmy niczego z tego dnia nie
        przegapili.
      </p>
      <a href="https://drive.google.com/drive/folders/1EYuKQx4U5BlH9tdsrc-H8YX_n7_u5Biz">
        <button className="rounded-full bg-RAL9003 text-RAL6011 mx-10 p-3 text-xl ">
          WGRAJ FOTKI
        </button>
      </a>
      <div className="mt-4 text-6xl font-script leading-9  flex flex-col justify-center items-center">
        <p className="mb-8">Dziękujemy!</p>
        <FaHeart size={16} />

        <p>Sylwia i Piotr</p>
        <p>Jemiołowie</p>
      </div>
    </div>
  );
}

export default ThankYou;
