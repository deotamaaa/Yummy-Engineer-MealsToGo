import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {RestaurantsScreen} from '../../features/restaurants/screens/restaurants.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerTitle: 'Restaurants',
        headerShown: true,
      }}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
