import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Auth Screens
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';

// Main App Screens
import HomeScreen from '../screens/HomeScreen';
import MapViewScreen from '../screens/MapViewScreen';
import BusStopScreen from '../screens/BusStopScreen';
import TransportInfoScreen from '../screens/TransportInfoScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Main tab navigator for the app
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Bus Stops') {
            iconName = focused ? 'bus' : 'bus-outline';
          } else if (route.name === 'Transport') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapViewScreen} />
      <Tab.Screen name="Bus Stops" component={BusStopScreen} />
      <Tab.Screen name="Transport" component={TransportInfoScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// Auth stack navigator
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
    </Stack.Navigator>
  );
};

// Root navigator that handles auth flow
const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking authentication status
    setTimeout(() => {
      setIsLoading(false);
      // For development, you can set this to true to skip login
      setIsAuthenticated(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};

// Main app navigator with navigation container
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
