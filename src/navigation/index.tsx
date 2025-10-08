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
  MainStack: undefined;
  PickVoiceScreen: undefined;
};

const Root = createNativeStackNavigator<RootParamList>();

import { createNativeStackNavigator as createInnerStack } from '@react-navigation/native-stack';

const OnBoardingStack = createInnerStack();
const MainStack = createInnerStack();

function OnBoardingStackNavigator() {
  return (
    <OnBoardingStack.Navigator>
      <OnBoardingStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <OnBoardingStack.Screen
        name="EnterCompanyIDScreen"
        component={EnterCompanyIDScreen}
      />
      <OnBoardingStack.Screen
        name="PickVoiceScreen"
        component={PickVoiceScreen}
        options={{ presentation: 'modal' }}
      />
    </OnBoardingStack.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="MainScreen" component={MainScreen} />
    </MainStack.Navigator>
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
    <Root.Navigator screenOptions={{ headerShown: false }}>
      {showSplash ? (
        <Root.Screen name="SplashScreen" component={SplashScreen} />
      ) : (
        <>
          <Root.Screen
            name="OnBoardingStack"
            component={OnBoardingStackNavigator}
          />
          <Root.Screen name="MainStack" component={MainStackNavigator} />
        </>
      )}
    </Root.Navigator>
  );
};

export default Navigator;
