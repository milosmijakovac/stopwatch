import React from "react";
import "./css/style.css"
import Stopwatch from "./Stopwatch";

const App: React.FC = () => {
  return (
    <div className="stopwatch-page">
      <Stopwatch />
    </div>
  );
};
export default App;
