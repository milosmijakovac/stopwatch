import React from 'react';

const Stopwatch = () => {
  const clockFaces = [
    'twelve', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten', 'eleven'
  ];

  const renderClockFaces = () => {
    return clockFaces.map((face, index) => (
      <span key={index} className={`clock-face ${face}`}></span>
    ));
  };

  const renderSecondMarks = () => {
    return Array.from({ length: 60 }).map((_, index) => (
      <span key={index} className={`clock-face seconds second-${index + 1}`}></span>
    ));
  };

  return (
    <div className="clock1">
      <input type="radio" name="timer" id="start" />
      <input type="radio" name="timer" id="stop" />
      <input type="radio" name="timer" id="reset" />

      {/* Top Button */}
      <label className="btn red" htmlFor="reset"></label>
      <span className="ring"></span>
      <div className="btn"></div>

      {/* Right Button */}
      <label className="btn right blue" htmlFor="start"></label>
      <div className="btn right"></div>

      {/* Left Button */}
      <label className="btn left black" htmlFor="stop"></label>
      <div className="btn left"></div>

      {/* Clock */}
      <span className="axis tiny"></span>
      <span className="axis"></span>
      <span className="second-hand"></span>

      {/* Clock Faces */}
      {renderClockFaces()}

      {/* Clock Face Seconds */}
      {renderSecondMarks()}
    </div>
  );
};

export default Stopwatch;
