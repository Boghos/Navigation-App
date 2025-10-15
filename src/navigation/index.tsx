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
import { Platform, TouchableOpacity } from 'react-native';
import { LinkingOptions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        name="OnboardingPickVoice"
        component={PickVoiceScreen}
        options={{
          title: 'Pick Voice',
          presentation: 'modal', // ensures it's a modal sheet
          animation: 'slide_from_bottom', // gives downward slide animation
        }}
        initialParams={{ source: 'onboarding' }}
      />
    </OnBoardingStack.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={({ navigation }) => ({
          title: 'Main Screen',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('SettingsModal')}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="settings-outline" size={24} color="#000" />
            </TouchableOpacity>
          ),
        })}
      />
      <MainStack.Screen
        name="VoiceBotModal"
        component={VoiceBotScreen}
        options={({ navigation }) => ({
          title: 'Voice Bot',
          presentation: 'modal', // shows it as modal
          gestureEnabled: true, // allows swipe down to close (iOS)
          headerBackVisible: false, // hides the arrow
          animation: 'slide_from_bottom',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginRight: 10 }}
            >
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          ),
        })}
      />
    </MainStack.Navigator>
  );
}

// Deep linking config
const linking = {
  prefixes: ['myapp://', 'https://myapp.example.com'],
  config: {
    screens: {
      SettingsModal: {
        screens: {
          SetCompanyIDScreen: 'settings/set-company-id',
        },
      },
    },
  },
};

function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsHome"
        component={SettingsScreen}
        options={({ navigation }) => ({
          title: 'Settings',
          presentation: 'modal', // shows it as modal
          gestureEnabled: true, // allows swipe down to close (iOS)
          headerBackVisible: false, // hides the arrow
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginRight: 10 }}
            >
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          ),
        })}
      />
      <SettingsStack.Screen
        name="SettingsPickVoice"
        component={PickVoiceScreen}
        initialParams={{ source: 'settings' }}
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
        name="SettingsEnterCompanyID"
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

          {/* <Root.Screen
            name="PickVoiceModal"
            component={PickVoiceScreen}
            options={{
              headerShown: true,
              title: 'Pick Voice',
              presentation:
                Platform.OS === 'ios' ? 'modal' : 'transparentModal',
              animation: 'slide_from_bottom',
            }}
          /> */}

          {/* <Root.Screen
            name="VoiceBotModal"
            component={VoiceBotScreen}
            options={{
              presentation:
                Platform.OS === 'ios' ? 'modal' : 'transparentModal',
              animation: 'slide_from_bottom',
            }}
          /> */}

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
