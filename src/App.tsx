import React, { useState } from 'react';
import './App.css';

function App() {
  const [water, setWater] = useState<number>(0);
  return (
    <div className="App">
      <div id="container">
        <div id="glass" onClick={(e) => setWater(water + 5)}>
          <div id="water" style={{ height: water + "em" }} />
        </div>
      </div>
    </div>
  );
}

export default App;
