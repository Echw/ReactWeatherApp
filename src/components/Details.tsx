import React from 'react';
import styled from 'styled-components';
import { Weather } from '../utils/types/Weather';

const List = styled.ul`
  list-style-type: none;
  padding: 2rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px #ccc solid;
`;

const Title = styled.h4`
  font-weight: 800;
  padding-bottom: 1rem;
`;

const Text = styled.span`
  font-weight: 300;
`;

const Li = styled.li`
  margin: 1.5rem 0;
  display: flex;
  justify-content: space-between;
`;

interface DetailsProps {
  weather: Weather | undefined;
}

const Details = (props: DetailsProps) => {
  return (
    <List>
      <Title>Weather Details</Title>
      <Li>
        <Text>Cloudy</Text>
        <Text>
          {props.weather === undefined ? '?' : props.weather.clouds.all}%
        </Text>
      </Li>
      <Li>
        <Text>Humidity</Text>
        <Text>
          {props.weather === undefined ? '?' : props.weather.main.humidity}%
        </Text>
      </Li>
      <Li>
        <Text>Wind</Text>
        <Text>
          {props.weather === undefined ? '?' : props.weather.wind.speed}km/h
        </Text>
      </Li>
    </List>
  );
};

export default Details;
