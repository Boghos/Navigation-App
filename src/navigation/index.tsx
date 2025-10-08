import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import EnterCompanyIDScreen from '../screens/EnterCompanyIDScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';
import MainScreen from '../screens/MainScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import VoiceBotScreen from '../screens/VoiceBotScreen';
import SetCompanyIDScreen from '../screens/SetCompanyIDScreen';
import { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { LinkingOptions } from '@react-navigation/native';

type RootParamList = {
  SplashScreen: undefined;
  WelcomeScreen: undefined;
  OnBoardingStack: undefined;
  MainStack: undefined;
  PickVoiceScreen: undefined;
  VoiceBotModal: undefined;
  VoiceBotScreen: undefined;
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
        options={{ presentation: 'card' }}
      />
    </OnBoardingStack.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="MainScreen" component={MainScreen} />
      <MainStack.Screen
        name="VoiceBotModal"
        component={VoiceBotScreen}
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
    </MainStack.Navigator>
  );
}

// Deep linking config
const linking: LinkingOptions<any> = {
  prefixes: ['myapp://', 'https://myapp.example.com'],
  config: {
    screens: {
      // root-level mapping - we map directly into SettingsModal -> SetCompanyID
      SettingsModal: {
        path: 'settings/set-company',
        // The path will navigate into the modal which contains the SettingsStack
      },
      // fallback/default
      SplashScreen: 'splash',
    },
  },
};

function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsHome"
        component={SettingsScreen}
        options={{ headerShown: true, title: 'Settings' }}
      />
      <SettingsStack.Screen
        name="PickVoiceScreen"
        component={PickVoiceScreen}
        options={{ headerShown: true }}
      />
      <SettingsStack.Screen
        name="SetCompanyIDScreen"
        component={SetCompanyIDScreen}
        options={{
          headerShown: true,
          title: 'Set Company ID',
        }}
      />
      <SettingsStack.Screen
        name="EnterCompanyID"
        component={EnterCompanyIDScreen}
        options={{
          headerShown: true,
          title: 'Enter Company ID',
        }}
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
              presentation:
                Platform.OS === 'ios' ? 'modal' : 'transparentModal',
              animation: 'slide_from_bottom',
            }}
          />

          {/* Voicebot: full screen modal launched from Main */}
          {/* <Root.Screen
            name="VoiceBotModal"
            component={VoiceBotScreen}
            options={{
              presentation:
                Platform.OS === 'ios' ? 'modal' : 'transparentModal',
              animation: 'slide_from_bottom',
            }}
          /> */}

          {/* Settings Modal: we present as modal with its own nested stack */}
          <Root.Screen
            name="SettingsModal"
            component={SettingsStackNavigator}
            options={{
              headerShown: false,
              presentation: Platform.OS === 'ios' ? 'pageSheet' : 'modal',
              animation: 'slide_from_bottom',
            }}
          />
        </>
      )}
    </Root.Navigator>
  );
};

export default { Navigator, linking };
