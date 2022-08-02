import React, { ChangeEventHandler, useState } from 'react';
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

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=62b629d08feb233f5648188d349600ae`;

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
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setLocation('');
  };

  return (
    <AppContainer>
      <MainData />
      <Sidebar
        onChange={searchLocationHandler}
        onSubmit={onSearchSubmit}
      ></Sidebar>
    </AppContainer>
  );
}

export default App;
