import React from "react";

function Header() {
  return (
    <div className="min-h-screen flex flex-col gap-6 items-center text-center py-6 font-script mx-3 max-w-3xl">
      <div className="text-8xl leading-10 mt-2">
        <p>To the moon</p>
        <p className="my-6"></p>
        <p>and back</p>
      </div>
      <img
        src="Zdj 1.1.jpg"
        alt="Zaręczyny 1"
        className="w-auto h-auto  rounded-full mx-auto max-w-m max-h-m border-2"
      />
      <div className="text-7xl leading-9 ">
        <p>Sylwia Zielińska</p>
        <p className="">&</p>
        <p>Piotr Jemioła</p>
      </div>
      <p className="text-7xl">20 lipiec 2024</p>
    </div>
  );
}

export default Header;
