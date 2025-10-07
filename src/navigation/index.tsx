import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import EnterCompanyIDScreen from '../screens/EnterCompanyIDScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';
import MainScreen from '../screens/MainScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { useState, useEffect } from 'react';

type RootParamList = {
  SplashScreen: undefined;
  WelcomeScreen: undefined;
  OnBoardingStack: undefined;
};

const Root = createNativeStackNavigator<RootParamList>();

import { createNativeStackNavigator as createInnerStack } from '@react-navigation/native-stack';

const OnBoardingStack = createInnerStack();

function OnBoardingStackNavigator() {
  return (
    <OnBoardingStack.Navigator>
      <OnBoardingStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <OnBoardingStack.Screen
        name="EnterCompanyIDScreen"
        component={EnterCompanyIDScreen}
        options={{ headerShown: true }}
      />
      <OnBoardingStack.Screen
        name="PickVoiceScreen"
        component={PickVoiceScreen}
        options={{ headerShown: true, presentation: 'modal' }}
      />
    </OnBoardingStack.Navigator>
  );
}

const Navigator = () => {
  const [initialRouteDetermined, setInitialRouteDetermined] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show splash for 3 seconds
    const t = setTimeout(() => {
      setShowSplash(false);
      setInitialRouteDetermined(true);
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <Root.Navigator>
      {showSplash ? (
        <Root.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      ) : (
        // After splash, show Onboarding stack (normal launch)
        <Root.Screen
          name="OnBoardingStack"
          component={OnBoardingStackNavigator}
          options={{ headerShown: false }}
        />
      )}
    </Root.Navigator>
  );
};
export default Navigator;
