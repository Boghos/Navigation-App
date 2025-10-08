import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/index';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer linking={Navigation.linking}>
        <Navigation.Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
