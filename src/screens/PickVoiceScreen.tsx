import { View, Text, Button } from 'react-native';
import React from 'react';
import { CommonActions } from '@react-navigation/native';

const PickVoiceScreen = ({ navigation }: any) => {
  const handleDismiss = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'MainStack' }],
      }),
    );
  };

  return (
    <View>
      <Text>PickVoiceScreen</Text>
      <Button title="Dismiss" onPress={handleDismiss} />
    </View>
  );
};

export default PickVoiceScreen;
