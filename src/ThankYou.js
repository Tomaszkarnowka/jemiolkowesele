import React from "react";

function ThankYou() {
  return (
    <div className="text-center mx-8 flex flex-col mb-10">
      <h2 className="text-7xl mb-6 font-script leading-10">
        Życzenie Młodej Pary
      </h2>
      <p className="mb-4">
        Na koniec mamy do Was jeszcze prośbę o pomoc w utrwaleniu tych
        wspaniałych wspomnień, które dziś tworzymy. Poniżej znajdziecie link do
        dysku, który umożliwi Wam wgranie zdjęć i filmików, tak by nic z tego
        dnia nas nie ominęło.
      </p>
      <a href="https://drive.google.com/drive/folders/1_D0mSpIdQH7dVREiw5UMY6HJSf9IOBz5?usp=sharing">
        <button className="rounded-full bg-RAL9003 text-RAL6011 mx-10 p-2">
          WGRAJ FOTKI
        </button>
      </a>
      <p className="mt-4">
        Dziękujemy!
        <br />
        Piotr i Sylwia
        <br /> Jemiołowie
      </p>
    </div>
  );
}

export default ThankYou;
