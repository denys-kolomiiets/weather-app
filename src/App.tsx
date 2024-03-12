import { useState } from "react";
import axios from "axios";
function App() {
  // const cityCoordinates = `http://api.openweathermap.org/geo/1.0/direct?q=kyiv&appid=619c485f9412948c1be0d4bb8f4bea4c`
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=50.4333&lon=30.5167&appid=619c485f9412948c1be0d4bb8f4bea4c`;
  return (
    <div className="app">
      <div className="top">
        <div className="location">
          <p>Kyiv</p>
        </div>
        <div className="temp">
          <h1>2°C</h1>
        </div>
        <div className="description">
          <p>Clouds</p>
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p>-1°C</p>
        </div>
        <div className="humidity">
          <p>80%</p>
        </div>
        <div className="wind">
          <p>15km/h</p>
        </div>
      </div>
    </div>
  );
}

export default App;
