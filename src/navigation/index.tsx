import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import EnterCompanyIDScreen from '../screens/EnterCompanyIDScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';
import MainScreen from '../screens/MainScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import VoiceBotScreen from '../screens/VoiceBotScreen';
import { useState, useEffect } from 'react';
import { Platform } from 'react-native';

type RootParamList = {
  SplashScreen: undefined;
  WelcomeScreen: undefined;
  OnBoardingStack: undefined;
  MainStack: undefined;
  PickVoiceScreen: undefined;
  VoicebotModal: undefined;
  SettingsModal: undefined;
  PickVoiceModal: undefined;
};

const Root = createNativeStackNavigator<RootParamList>();

import { createNativeStackNavigator as createInnerStack } from '@react-navigation/native-stack';

const OnBoardingStack = createInnerStack();
const MainStack = createInnerStack();
const SettingsStack = createInnerStack();

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

function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsHome"
        component={SettingsScreen}
        options={{ headerShown: true, title: 'Settings' }}
      />
      <SettingsStack.Screen
        name="PickVoice"
        component={PickVoiceScreen}
        options={{ headerShown: true }}
      />
    </SettingsStack.Navigator>
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
          <Root.Screen
            name="MainStack"
            component={MainStackNavigator}
            options={{ headerShown: false, presentation: 'card' }}
          />
          {/* PickVoice Modal: presented at root level over MainStack */}
          <Root.Screen
            name="PickVoiceModal"
            component={PickVoiceScreen}
            options={{
              headerShown: true,
              title: 'Pick Voice',
              presentation: Platform.OS === 'ios' ? 'modal' : 'modal',
            }}
          />

          {/* Voicebot: full screen modal launched from Main */}
          <Root.Screen
            name="VoicebotModal"
            component={VoiceBotScreen}
            options={{ headerShown: false, presentation: 'fullScreenModal' }}
          />

          {/* Settings Modal: we present as modal with its own nested stack */}
          <Root.Screen
            name="SettingsModal"
            component={SettingsStackNavigator}
            options={{
              headerShown: false,
              presentation:
                Platform.OS === 'ios' ? 'modal' : 'containedTransparentModal',
            }}
          />
        </>
      )}
    </Root.Navigator>
  );
};

export default Navigator;
