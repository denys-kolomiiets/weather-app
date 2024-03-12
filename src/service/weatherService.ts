import axios from "axios";
import { API_KEY } from "../config";

const makeIconUrl = (iconId: string) => {
  return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
};
const getWeatherData = async (query: string) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(URL);
    const data = response.data;
    const {
      weather,
      main: { temp, feels_like, humidity },
      wind: { speed },
      name,
    } = data;
    const { description, icon } = weather[0];

    return {
      description,
      iconURL: makeIconUrl(icon),
      temp,
      feels_like,
      name,
      speed,
      humidity,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

export { getWeatherData };
