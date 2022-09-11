import React from 'react';
import styled from 'styled-components';
import { Weather } from '../utils/types/Weather';

const AppContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  padding: 2rem 3rem 4rem 3rem;
  color: white;
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`;

const Temp = styled.h1`
  margin: 0;
  margin-bottom: 0.2rem;
  font-size: 7rem;
`;

const CityName = styled.h1`
  margin: 0;
  margin-bottom: 0.2rem;
  font-size: 3rem;
`;
const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const DateTime = styled.span`
  font-weight: 300;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Icon = styled.img`
  height: 2.5rem;
`;
const WeatherIcon = styled.span`
  font-weight: 300;
`;

interface MainDataProps {
  weather: Weather | undefined;
}

const MainData = (props: MainDataProps) => {
  return (
    <AppContainer>
      <div>
        <h3>ReactWeather</h3>
      </div>
      <DataContainer>
        {props.weather === undefined ? (
          <h2>Not Found</h2>
        ) : (
          <>
            <Temp>
              {props.weather.main.temp.toFixed()}
              &#176;
            </Temp>
            <DateContainer>
              <CityName>{props.weather.name}</CityName>
              <DateTime>{new Date().toLocaleString('en-US') + ''}</DateTime>
            </DateContainer>
            <IconContainer>
              <Icon
                src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}.png`}
              />
              <WeatherIcon>{props.weather.weather[0].main}</WeatherIcon>
            </IconContainer>
          </>
        )}
      </DataContainer>
    </AppContainer>
  );
};

export default MainData;
