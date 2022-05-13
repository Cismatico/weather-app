import axios from "axios";
import { useEffect, useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import WeatherSearch from "./WeatherSearch";


function MidContainer() {
  const [weather, setWeather] = useState([] as any);
  const [locations, setLocations] = useState('seville');
  const [sky, setSky] = useState('clear');
  
  useEffect(() => {
    getWeatherData();
    // eslint-disable-next-line
  }, []);

  function handleClick() {
    getWeatherData();
  }

  function getWeatherData() {
    axios.get(
      `${process.env.REACT_APP_API_URL}/weather?q=${locations}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
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