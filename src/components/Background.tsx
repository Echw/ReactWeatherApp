import React from 'react';
import styled from 'styled-components';
import imgClearDay from '../photos/day/clearSky.jpg';
import imgCloudyDay from '../photos/day/cloudySky.jpg';
import imgRainDay from '../photos/day/rain.jpg';
import imgSnowDay from '../photos/day/snow.jpg';
import imgClearNight from '../photos/night/clearSky.jpg';
import imgCloudyNight from '../photos/night/nightCloudy.jpg';
import imgRainNight from '../photos/night/nightRain.jpg';
import imgSnowNight from '../photos/night/nightSnow.jpg';

import { Weather } from '../App';

const Container = styled.div<{ img: string }>`
  height: 100vh;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 500ms;
  opacity: 1;
  background-color: #436d92;
  z-index: -1;
`;
const Img = styled.img``;

interface BackgroundProps {
  icon: string;
}

const getBackgroundImg = (icon: string) => {
  console.log(icon);
  switch (icon) {
    case '01d':
      return imgClearDay;
    case '02d':
      return imgCloudyDay;
    case '03d':
      return imgCloudyDay;
    case '04d':
      return imgCloudyDay;
    case '09d':
      return imgRainDay;
    case '10d':
      return imgRainDay;
    case '11d':
      return imgRainDay;
    case '13d':
      return imgSnowDay;
    case '50d':
      return imgSnowDay;
    case '01n':
      return imgClearNight;
    case '02n':
      return imgCloudyNight;
    case '03n':
      return imgCloudyNight;
    case '04n':
      return imgCloudyNight;
    case '09n':
      return imgRainNight;
    case '10n':
      return imgRainNight;
    case '11n':
      return imgRainNight;
    case '13n':
      return imgCloudyDay;
    case '50n':
      return imgSnowNight;
    default:
      return imgSnowNight;
  }
};

const Background = (props: BackgroundProps) => {
  return (
    <Container img={getBackgroundImg(props.icon)}>
      <Img></Img>
    </Container>
  );
};

export default Background;
