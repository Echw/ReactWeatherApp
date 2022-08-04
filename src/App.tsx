import React, { ChangeEventHandler, useEffect, useState } from 'react';

import MainData from './components/MainData';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import axios from 'axios';
import Background from './components/Background';
import Forecast from './components/Forecast';

const AppContainer = styled.div``;

export type Weather = {
  name: string;
  main: { temp: number; humidity: number };
  clouds: { all: number };
  wind: { speed: number };
  weather: { id: number; main: string; icon: string }[];
};

export type ForecastData = {
  list: {
    dt: number;
    main: { temp: number; humidity: number };
    weather: { id: number; main: string; icon: string }[];
    wind: { speed: number };
    clouds: { all: number };
  }[];
};

function App() {
  const [data, setData] = useState<Weather>();
  const [location, setLocation] = useState('');
  const [showForecast, setShowForecast] = useState(false);
  const [searchData, setSearchData] = useState<string[]>(
    JSON.parse(localStorage.getItem('locationData') || '[]')
  );

  useEffect(() => {
    localStorage.setItem('locationData', JSON.stringify(searchData));
  }, [searchData]);

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
        setData(response.data);
      })
      .catch((err) => console.error(err));
    setSearchData((prevValue: string[]) =>
      [location, ...prevValue].slice(0, 4)
    );
    setLocation('');
    event.currentTarget.reset();
  };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Warsaw&units=metric&appid=${process.env.REACT_APP_WEATHER_APP_ID}`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const onCityClick = (cityName: string) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_APP_ID}`
      )
      .then((response) => {
        setData(response.data);
      });
  };

  const onClick = () => setShowForecast((prevValue) => !prevValue);

  return (
    <AppContainer>
      <Background icon={data === undefined ? '' : data.weather[0].icon} />
      <MainData data={data} />
      {showForecast ? (
        <Forecast onClick={onClick} data={data} />
      ) : (
        <Sidebar
          localData={searchData}
          onClick={onClick}
          onCityClick={onCityClick}
          onChange={searchLocationHandler}
          onSubmit={onSearchSubmit}
          data={data}
        ></Sidebar>
      )}
    </AppContainer>
  );
}

export default App;
