import React from 'react';
import styled from 'styled-components';

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
const Details = () => {
  return (
    <List>
      <Title>Weather Details</Title>
      <Li>
        <Text>Cloudy</Text>
        <Text>70%</Text>
      </Li>
      <Li>
        <Text>Humidity</Text>
        <Text>70%</Text>
      </Li>
      <Li>
        <Text>Wind</Text>
        <Text>70%</Text>
      </Li>
    </List>
  );
};

export default Details;
