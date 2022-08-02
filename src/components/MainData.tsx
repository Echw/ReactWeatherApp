import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

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
const NavContainer = styled.div``;
const Logo = styled.h3``;

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
const Icon = styled(FontAwesomeIcon)`
  height: 2.5rem;
  opacity: 0.5;
`;
const WeatherIcon = styled.span`
  font-weight: 300;
`;

const MainData = () => {
  return (
    <AppContainer>
      <NavContainer>
        <Logo>ReactWeather</Logo>
      </NavContainer>
      <DataContainer>
        <Temp>16&#176;</Temp>
        <DateContainer>
          <CityName>Warsaw</CityName>
          <DateTime>18.12 - Friday Jul 29</DateTime>
        </DateContainer>
        <IconContainer>
          <Icon icon={faSun} />
          <WeatherIcon>Sunny</WeatherIcon>
        </IconContainer>
      </DataContainer>
    </AppContainer>
  );
};

export default MainData;
