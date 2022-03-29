import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';

const SafeAreaView = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.bg.primary};
  flex: 1;
`;

const SearchBarView = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView>
      <SearchBarView>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchBarView>
      <FlatList
        data={[{name: 1}, {name: 2}, {name: 3}]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={item => item.name}
        contentContainerStyle={{padding: 16}}
      />
    </SafeAreaView>
  );
};
