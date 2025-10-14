import { View, Text, Button } from 'react-native';
import React from 'react';
import { CommonActions } from '@react-navigation/native';

const PickVoiceScreen = ({ navigation, route }: any) => {
  const source = route?.params?.source ?? 'onboarding';
  const handleDismiss = () => {
    if (source === 'onboarding') {
      // End onboarding and show MainStack as the app's main content
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'MainStack' }],
        }),
      );
      // This resets navigation and reveals MainStack below.
    } else {
      // Opened from settings -> just go back in settings stack
      navigation.goBack();
    }
  };

  return (
    <View>
      <Text>PickVoiceScreen</Text>
      <Button title="Dismiss" onPress={handleDismiss} />
    </View>
  );
};

export default PickVoiceScreen;
