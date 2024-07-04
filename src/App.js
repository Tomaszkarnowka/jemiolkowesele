import React from "react";
import Header from "./Header";
import BrideGroom from "./BrideGroom";
import FirstMeeting from "./FirstMeeting";
import Memories from "./Memories";
import Engagement from "./Engagement";
import OurRoad from "./OurRoad";
import ThankYou from "./ThankYou";

function App() {
  return (
    <div className="bg-RAL6011 text-RAL9003 flex flex-col gap-3 items-center text-center">
      <Header />
      <div className="text-center flex flex-col justify-center items-center">
        <img src="ikona.png" alt="Zaręczyny 2" className="w-64 " />
      </div>
      <BrideGroom />
      <div className="text-center flex flex-col justify-center items-center">
        <img src="ikona.png" alt="Zaręczyny 2" className="w-64 " />
      </div>
      <FirstMeeting />
      <div className="text-center flex flex-col justify-center items-center">
        <img src="ikona.png" alt="Zaręczyny 2" className="w-64 " />
      </div>
      <Memories />
      <div className="text-center flex flex-col justify-center items-center">
        <img src="ikona.png" alt="Zaręczyny 2" className="w-64 " />
      </div>
      <Engagement />
      <div className="text-center flex flex-col justify-center items-center">
        <img src="ikona.png" alt="Zaręczyny 2" className="w-64 " />
      </div>
      <OurRoad />
      <div className="text-center flex flex-col justify-center items-center">
        <img src="ikona.png" alt="Zaręczyny 2" className="w-64 " />
      </div>
      <ThankYou />
    </div>
  );
}

export default App;
