import { useEffect, useState } from "react";

import { getWeatherData } from "./service/weatherService";
import { ResponseData } from "./types/responseData.type";

function App() {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState<ResponseData | null>(null);
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData("ukrainka");
      setWeatherData(data);
    };
    fetchWeatherData();
  }, []);
  return (
    <div className="app">
      <div className="search">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      {weatherData !== null && (
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{weatherData.name}</p>
            </div>
            <div className="temp">
              <h1>{weatherData.temp.toFixed()}°C</h1>
            </div>
            <div className="description">
              <p>Clouds</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p>Feels like</p>
              <p className="bold">{weatherData.feels_like.toFixed()}°C</p>
            </div>
            <div className="humidity">
              <p>Humidity</p>
              <p className="bold">{weatherData.humidity}%</p>
            </div>
            <div className="wind">
              <p>Wind</p>
              <p className="bold">{weatherData.speed.toFixed()}m/s</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
