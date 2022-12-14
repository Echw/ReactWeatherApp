import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Weather } from '../utils/types/Weather';
import { Forecast as ForecastType } from '../utils/types/Forecast';

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

const Td = styled.td`
  text-align: center;
`;

interface ForecastProps {
  onClick: () => void;
  weather: Weather | undefined;
}

const Forecast = (props: ForecastProps) => {
  const [forecastData, setForecastData] = useState<ForecastType>();

  useEffect(() => {
    if (props.weather === undefined) {
      return;
    }
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${props.weather.name}&units=metric&appid=${process.env.REACT_APP_WEATHER_APP_ID}`
      )
      .then((response) => {
        setForecastData(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      {forecastData === undefined ? (
        <h2>Not Found</h2>
      ) : (
        <>
          <Title>Daily Forecast 5 Days</Title>
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>Date</th>
                <th>Weather</th>
                <th>Temp</th>
                <th>Cloudy</th>
                <th>Humidity</th>
                <th>Wind</th>
              </tr>
            </thead>
            <tbody>
              {forecastData.list.map((day) => (
                <tr key={day.dt}>
                  <Td>
                    {new Date(day.dt * 1000).toLocaleString('en-US', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Td>
                  <Td>
                    <img
                      src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    />
                    <p>{day.weather[0].main}</p>
                  </Td>

                  <Td>{day.main.temp.toFixed()}&#176;</Td>
                  <Td>{day.clouds.all}%</Td>
                  <Td>{day.main.humidity}%</Td>
                  <Td>{day.wind.speed}km/h</Td>
                </tr>
              ))}
            </tbody>
          </table>
          <BackBtn onClick={props.onClick}>Back</BackBtn>
        </>
      )}
    </Container>
  );
};

export default Forecast;
