import React from 'react';
import './style.scss';
import Stopwatch from './Stopwatch';

const App: React.FC = () => {
  /**
   * Implement the core of your task in this file.
   */

  return (
    <div className="stopwatch-page">
      <Stopwatch />
    </div>
  );
};
export default App;
