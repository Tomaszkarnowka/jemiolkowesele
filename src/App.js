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
    <div className="bg-RAL6011 text-RAL9003 flex flex-col gap-6">
      <Header />
      <div className="border-b mx-20 drop-shadow-2xl "></div>
      <BrideGroom />
      <FirstMeeting />
      <Memories />
      <Engagement />
      <OurRoad />
      <ThankYou />
    </div>
  );
}

export default App;
