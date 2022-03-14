import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


  // Add custom Font
  let customFonts = {
    "Roboto-Black": require('./assets/fonts/Roboto-Black.ttf'),
    "Roboto-Regular": require('./assets/fonts/Roboto-Regular.ttf'),
  };
  


export default function App() {



  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
