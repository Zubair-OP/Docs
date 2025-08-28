import "./index.css";
import React from "react";
import Bg from "./components/Bg";
import Fg from "./components/Fg";

function App() {
  return (
    <div>
      <div className="relative  bg-zinc-800 w-full h-screen">
        <Bg />
        <Fg />
      </div>
    </div>
  );
}

export default App;
