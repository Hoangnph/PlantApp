import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
// Screens
import {  PlantDetail } from './src/screens'
// Tab
import Tabs from './src/navigation/tabs'

const Stack = createStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
    "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
    "Roboto-Bold": require('./assets/fonts/Roboto-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{ 
          headerShown : false
        }}
        initialRouteName={"Home"}
      >

        <Stack.Screen 
        name= "Home"
        component={ Tabs }
        options={{headerShown: false}}
        />

        {/* Screen */}
        <Stack.Screen 
          name= "PlantDetail"
          component={ PlantDetail }
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
