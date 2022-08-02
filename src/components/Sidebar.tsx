import React from 'react';
import Details from './Details';
import Search from './Search';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 40%;
  height: 100%;
  top: 0;
  right: 0;
  background: rgba(110, 110, 110, 0.25);
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(0.2rem);
  -webkit-backdrop-filter: blur(0.2rem);
  padding: 2rem;
  color: white;
  overflow-y: scroll;
`;
interface SidebarProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
const Sidebar = (props: SidebarProps) => {
  return (
    <Container>
      <Search onChange={props.onChange} onSubmit={props.onSubmit}></Search>
      <Details></Details>
    </Container>
  );
};

export default Sidebar;
