
import React from "react";
import Slider from "./components/carousel/Slider";
import "react-context-modals/dist/main.css";
import ExperienceComp from "./components/ExperienceComp/ExperienceComp";

function App() {
  return (
    <div className="App">
      <Slider />
      <ExperienceComp />
    </div>
  );
}

export default App;
