import React from 'react';
import Details from './Details';
import Search from './Search';
import styled from 'styled-components';
import { Weather } from '../App';

const Container = styled.div`
  position: absolute;
  width: 40%;
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
  transition: 0.4s;
`;
const Btn = styled.button`
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

interface SidebarProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  data: Weather | undefined;
  onCityClick: (city: string) => void;
  onClick: () => void;
  localData: string[];
}

const Sidebar = (props: SidebarProps) => {
  return (
    <Container>
      <Search
        localData={props.localData}
        onCityClick={props.onCityClick}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
      ></Search>
      <Details data={props.data}></Details>
      <Btn onClick={props.onClick}>Daily Forecast</Btn>
    </Container>
  );
};

export default Sidebar;
