import React from "react";

function Engagement() {
  return (
    <div className="text-center mx-8 flex flex-col justify-center items-center">
      <p className="text-7xl mb-6 font-script leading-10">Oświadczyny</p>
      <p className="mb-2">
        Po sześciu latach namysłów i oszczędności, Piotrek postanowił oświadczyć
        się Sylwii, choć oboje wiedzieli, że to tylko formalność.<br></br>
        Rocznicowy wypad w lipcu 2021 roku na Korfu i 50-minutowy spacer w 30ºC
        na Cape Drastis zakończył się zaręczynami.<br></br>Z tego upału: on
        otworzył pudełeczko „do góry nogami”, a ona powiedziała w końcu TAK.
        <br></br>
        Piotrkowi tak się spodobało, że dosłownie rok później postanowił
        potwierdzić to drugimi zaręczynami, ale tym razem tak jak zawsze to
        planował, we Florencji.
      </p>
      <img
        src="zareczyny1.jpg"
        alt="Zaręczyny 1"
        className="w-full max-w-xs mx-2 mb-4 border-2"
      />
      <img
        src="zareczyny2.jpg"
        alt="Zaręczyny 2"
        className="w-full max-w-xs mx-2 border-2"
      />
    </div>
  );
}

export default Engagement;
