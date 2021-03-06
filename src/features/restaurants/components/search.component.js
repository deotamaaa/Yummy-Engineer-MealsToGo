import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';
import {LocationContext} from '../../../services/location/location.context';

const SearchBarView = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const Search = () => {
  const {keyword, search} = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchBarView>
      <Searchbar
        placeholder="Search"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={text => {
          setSearchKeyword(text);
        }}
      />
    </SearchBarView>
  );
};
