import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // Initialize state with default values
  const [r, setR] = useState(128);
  const [g, setG] = useState(128);
  const [b, setB] = useState(128);

  // Load saved colors on component mount
  useEffect(() => {
    const savedColors = JSON.parse(localStorage.getItem('color'));
    if (savedColors) {
      setR(savedColors.r || 128);
      setG(savedColors.g || 128);
      setB(savedColors.b || 128);
    }
  }, []);

  const save = () => {
    localStorage.setItem('color', JSON.stringify({ 
      r: Number(r), 
      g: Number(g), 
      b: Number(b) 
    }));
  };

  return (
    <div className="color-mixer-container">
      <h1>Color Mixer</h1>
      <div 
        className="color-display"
        style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
      ></div>

      <div className="slider-container">
        <label>
          Red: {r}
          <input 
            type="range"
            value={r}
            onChange={(e) => setR(e.target.value)}
            min={0}
            max={255}
          />
        </label>
      </div>

      <div className="slider-container">
        <label>
          Green: {g}
          <input 
            type="range"
            value={g}
            onChange={(e) => setG(e.target.value)}
            min={0}
            max={255}
          />
        </label>
      </div>

      <div className="slider-container">
        <label>
          Blue: {b}
          <input 
            type="range"
            value={b}
            onChange={(e) => setB(e.target.value)}
            min={0}
            max={255}
          />
        </label>
      </div>

      <button className="save-button" onClick={save}>
        Save Color Combination
      </button>
    </div>
  );
}

export default App;
