import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splashscreen from '../screens/Splashscreen';
import EnterCompanyIDScreen from '../screens/EnterCompanyIDScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';
import MainScreen from '../screens/MainScreen';

type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
};

const Root = createNativeStackNavigator<RootStackParamList>;
