import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';
import {LocationContext} from '../../../services/location/location.context';

const SearchBarView = styled.View`
  padding: ${props => props.theme.space[3]};
  position: absolute;
  z-index: 1;
  top: 20px;
  width: 100%;
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
        icon="map"
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
