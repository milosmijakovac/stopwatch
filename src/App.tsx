import React from "react";
import "./style.scss";
import Stopwatch from "./Stopwatch";

const App: React.FC = () => {
  return (
    <div className="stopwatch-page">
      <Stopwatch />
    </div>
  );
};
export default App;
