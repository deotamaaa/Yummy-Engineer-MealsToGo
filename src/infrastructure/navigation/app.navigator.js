import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';

import {RestaurantsScreen} from '../../features/restaurants/screens/restaurants.screen';
import {MapScreen} from '../../features/map/screens/map.screen';
import {RestaurantsNavigator} from './restaurants.navigator';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Restaurants') {
              iconName = focused ? 'ios-restaurant' : 'ios-restaurant';
            } else if (route.name === 'Map') {
              iconName = focused ? 'ios-map' : 'ios-map';
            } else {
              iconName = focused ? 'ios-options' : 'ios-options';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
