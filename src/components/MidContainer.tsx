import axios from "axios";
import { useEffect, useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import WeatherSearch from "./WeatherSearch";


function MidContainer() {
  const [weather, setWeather] = useState([] as any);
  const [locations, setLocations] = useState('seville');
  const [sky, setSky] = useState('clear');

  const url = 'https://api.openweathermap.org/data/2.5';
  const key = '213fd4de0e6c9b49f0f00849d2c10382';

  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line
  }, []);

  function handleClick() {
    getWeatherData();
  }

  function getWeatherData() {
    axios.get(
      `${url}/weather?q=${locations}&appid=${key}&units=metric`
    ).then(response => {
      setWeather(response.data);
      setSky(response.data.weather[0].main);
    });
  }

  return (
    <div className="mid-container">
      <WeatherSearch
        locations={locations}
        setLocations={setLocations}
        weather={weather}
        handleClick={handleClick}
      />
      <WeatherDisplay
        name={weather?.name}
        temp={weather?.main?.temp}
        sky={sky}
        country={weather?.sys?.country}
      />
    </div>
  );
}

export default MidContainer;