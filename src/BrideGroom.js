import React from "react";

function BrideGroom() {
  return (
    <div>
      <div className="text-center mx-2 mb-12">
        <p className="text-8xl leading-10 font-script mb-4">Cześć!</p>
        <p className="font-sans ">
          Poznaj bohaterów dzisiejszego wydarzenia i ich historię.
        </p>
      </div>
      <div
        id="bride-groom"
        className="py-4 flex flex-col md:flex-row justify-around mx-2"
      >
        <div className="person text-center mb-8 mx-8">
          <p className="text-8xl mb-12 font-script leading-10">Sylwia</p>
          <p className="mb-4">
            W tym roku skończyłam 26 lat. Jestem magistrem Ekonomii i obecnie
            pracuję w amerykańskiej korporacji zajmującej się obsługą finansową
            dla inwestorów instytucjonalnych. Brzmi całkiem poważnie, ale nie
            zawsze tak jest. Wolne chwile spędzam raczej aktywnie, ze znajomymi
            lub na zajęciach zumby. Moją pasją jest odkrywanie nowych miejsc.
          </p>
          <img
            src="sylwia1.jpg"
            alt="Sylwia"
            className="w-auto h-auto mx-auto border-2 border-RAL9003"
          />
        </div>
        <div className="person text-center mx-8">
          <p className="text-8xl mb-12 font-script leading-10 ">Piotr</p>
          <p className="mb-4">
            Może nie jestem głównym organizatorem tego wydarzenia, ale jestem
            równie ważną osobą dzisiejszego dnia. Pracuję jako konstruktor
            maszyn, a po pracy lubię odpalić grę na konsoli lub spędzić czas
            aktywnie na boisku bądź siłowni. Największą frajdę sprawia mi jednak
            podróżowanie i odkrywanie nowych miejsc z Sylwią.
          </p>
          <img
            src="piotr1.jpg"
            alt="Piotr"
            className="w-auto h-auto mx-auto border-2 border-RAL9003"
          />
        </div>
      </div>
    </div>
  );
}

export default BrideGroom;
