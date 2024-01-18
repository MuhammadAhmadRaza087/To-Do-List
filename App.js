import React, { useState } from 'react';
import { Text, View, Keyboard, TextInput, TouchableOpacity, ScrollView, useColorScheme } from 'react-native';
import ListWithStorage from './components/ListWithStorage';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme, useTheme
} from '@react-navigation/native';
import ListWithoutStorage from './components/ListWithoutStorage';
const App = () => {
  const CustomTheme = {
    dark: false,
    colors: {
      primary: 'rgb(240, 36, 138)', 
      background: 'rgb(191, 157, 174)', 
      card: 'rgb(255, 255, 255)', 
      text: 'rgb(237, 245, 243)', 
      border: 'rgb(204, 204, 204)', 
      notification: 'rgb(255, 82, 82)', 
      accent: 'rgb(255, 215, 0)', 
      secondary: 'rgb(94, 108, 132)', 
      button: 'rgb(240, 36, 138)'
    },
  };

 const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DefaultTheme : CustomTheme}>
      {/* <ListWithStorage></ListWithStorage> */}
      {/* <ListWithoutStorage></ListWithoutStorage> */}
    </NavigationContainer>
      

  );
}

export default App;
