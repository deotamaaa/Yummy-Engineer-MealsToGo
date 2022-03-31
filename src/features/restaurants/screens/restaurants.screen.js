import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import styled from 'styled-components/native';
import {ActivityIndicator, Colors} from 'react-native-paper';

import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';

import {Search} from '../components/search.component';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';

const SafeAreaView = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.bg.primary};
  flex: 1;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = () => {
  const {isLoading, restaurants} = useContext(RestaurantsContext);

  console.log(RestaurantsContext);

  return (
    <SafeAreaView>
      {isLoading && (
        <View style={{position: 'absolute', top: '50%', left: '50%'}}>
          <Loading size={50} animating={true} color={Colors.blue500} />
        </View>
      )}
      <Search />
      <FlatList
        data={restaurants}
        renderItem={({item}) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={item => item.name}
        contentContainerStyle={{padding: 16}}
      />
    </SafeAreaView>
  );
};
