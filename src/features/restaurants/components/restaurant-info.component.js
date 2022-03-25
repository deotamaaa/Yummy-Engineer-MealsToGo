import React from 'react';
import {Text} from 'react-native';

export const RestaurantInfo = ({restaurant = {}}) => {
  const {
    name = 'Test Name',
    icon,
    photos = [
      'https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg',
    ],
    address = 'Random Address',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return <Text style={{color: 'black'}}>Restaurant Info</Text>;
};
