import React, { ChangeEventHandler, useEffect, useState } from 'react';

import MainData from './components/MainData';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import Background from './components/Background';
import Forecast from './components/Forecast';
import { Weather } from './utils/types/Weather';

function App() {
  const [weather, setWeather] = useState<Weather>();
  const [location, setLocation] = useState('Warsaw');
  const [showForecast, setShowForecast] = useState(false);
  const [citiesHistory, setCitiesHistory] = useState<string[]>(
    JSON.parse(localStorage.getItem('citiesHistory') || '[]')
  );

  useEffect(() => {
    localStorage.setItem('citiesHistory', JSON.stringify(citiesHistory));
  }, [citiesHistory]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_WEATHER_APP_ID}`;

  const searchLocationHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocation(event.currentTarget.value);
  };

  const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (location.trim() === '') {
      return;
    }
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((err) => console.error(err));
    setCitiesHistory((prevValue: string[]) =>
      [location, ...prevValue].slice(0, 4)
    );
    setLocation('');
    event.currentTarget.reset();
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const onCityClick = (cityName: string) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_APP_ID}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  };

  const onClick = () => setShowForecast((prevValue) => !prevValue);

  return (
    <div>
      <Background icon={weather === undefined ? '' : weather.weather[0].icon} />
      <MainData weather={weather} />
      {showForecast ? (
        <Forecast onClick={onClick} weather={weather} />
      ) : (
        <Sidebar
          citiesHistory={citiesHistory}
          onClick={onClick}
          onCityClick={onCityClick}
          onChange={searchLocationHandler}
          onSubmit={onSearchSubmit}
          weather={weather}
        ></Sidebar>
      )}
    </div>
  );
}

export default App;
