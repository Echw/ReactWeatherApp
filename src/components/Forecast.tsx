import React, { useEffect, useState } from 'react';
import Details from './Details';
import Search from './Search';
import styled from 'styled-components';
import { ForecastData, Weather } from '../App';
import axios from 'axios';

const Container = styled.div`
  position: absolute;
  width: 70%;
  height: 100%;
  top: 0;
  right: 0;
  background: rgba(110, 110, 110, 0.5);
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(0.2rem);
  -webkit-backdrop-filter: blur(0.2rem);
  padding: 2rem;
  color: white;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  transition: 0.4s;
`;
const Title = styled.h1`
  padding: 2rem;
`;

const DataTitles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 1px #ccc solid;
`;
const Data = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 0 0;
`;

const BackBtn = styled.button`
  padding: 1.5rem;
  margin: 2rem 0;
  border: none;
  outline: none;
  background-color: #fa6d1b;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.4s;
  align-self: baseline;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  align-content: flex-start;
`;
interface ForecastProps {
  onClick: () => void;
  data: Weather | undefined;
}

const Forecast = (props: ForecastProps) => {
  const [forecastData, setForecastData] = useState<ForecastData>();

  useEffect(() => {
    if (props.data === undefined) {
      return;
    }
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${props.data.name}&units=metric&appid=${process.env.REACT_APP_WEATHER_APP_ID}`
      )
      .then((response) => {
        setForecastData(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(forecastData);

  return (
    <Container>
      {forecastData === undefined ? (
        <h2>Not Found</h2>
      ) : (
        <>
          <Title>Daily Forecast 16 Days</Title>
          <DataTitles>
            <p>Date</p>
            <p>Weather</p>
            <p>Temp</p>
            <p>Cloudy</p>
            <p>Humidity</p>
            <p>Wind</p>
          </DataTitles>
          {forecastData.list.map((day) => (
            <Data>
              <p>
                {new Date(day.dt * 1000).toLocaleString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
              <IconDiv>
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                />
                <p>{day.weather[0].main}</p>
              </IconDiv>
              <p>{day.main.temp.toFixed()}&#176;</p>
              <p>{day.clouds.all}%</p>
              <p>{day.main.humidity}%</p>
              <p>{day.wind.speed}km/h</p>
            </Data>
          ))}
          <BackBtn onClick={props.onClick}>Back</BackBtn>
        </>
      )}
    </Container>
  );
};

export default Forecast;
