import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  padding: 1rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px #ccc solid;
`;

const SearchButton = styled.button`
  padding: 1.5rem;
  border: none;
  outline: none;
  background-color: #fa6d1b;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.4s;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
const Icon = styled(FontAwesomeIcon)``;

const Input = styled.input`
  background: none;
  border: none;
  border-bottom: 1px #ccc solid;
  width: 80%;
  color: #fff;
  font-size: 1rem;
  padding: 0 1rem 1.5rem 0;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ccc;
  }
`;
const List = styled.ul`
  list-style-type: none;
`;

const Text = styled.li`
  font-weight: 300;
  margin: 1.5rem 0;
  cursor: pointer;

  &:hover {
    color: #fa6d1b;
  }
`;
interface SearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Search = (props: SearchProps) => {
  return (
    <Container>
      <form onSubmit={props.onSubmit}>
        <Input
          type="text"
          placeholder="Search Location..."
          onChange={props.onChange}
        />
        <SearchButton>
          <Icon icon={faMagnifyingGlass} />
        </SearchButton>
      </form>
      <List>
        <Text>Tymianka</Text>
        <Text>Białytok</Text>
        <Text>Siemiatycze</Text>
        <Text>Horodyszcze</Text>
      </List>
    </Container>
  );
};

export default Search;
