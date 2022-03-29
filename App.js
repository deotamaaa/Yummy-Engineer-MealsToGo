import React from 'react';
import {Text, View} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {RestaurantsScreen} from './src/features/restaurants/screens/restaurants.screen';
import {theme} from './src/infrastructure/theme/index';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {
//   useFonts as useOswald,
//   Oswald_400Regular,
// } from '@expo-google-fonts/oswald';
// import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function MapScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Map!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
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
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
