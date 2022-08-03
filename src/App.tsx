import React, { ChangeEventHandler, useEffect, useState } from 'react';
import './App.css';
import MainData from './components/MainData';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import imgClear from './photos/day/clearSky.jpg';
import axios from 'axios';

const AppContainer = styled.div`
  height: 100vh;
  background-image: url(${imgClear});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 500ms;
  opacity: 1;
  background-color: #436d92;
`;

export type Weather = {
  name: string;
  main: { temp: number; humidity: number };
  clouds: { all: number };
  wind: { speed: number };
  weather: { id: number; main: string; icon: string }[];
};

function App() {
  const [data, setData] = useState<Weather>();
  const [location, setLocation] = useState('');

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
    setLocation('');
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
    console.log(cityName);
  };

  return (
    <AppContainer>
      <MainData data={data} />
      <Sidebar
        onCityClick={onCityClick}
        onChange={searchLocationHandler}
        onSubmit={onSearchSubmit}
        data={data}
      ></Sidebar>
    </AppContainer>
  );
}

export default App;
