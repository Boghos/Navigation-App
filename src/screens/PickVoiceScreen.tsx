import { View, Text, Button } from 'react-native';
import React from 'react';

const PickVoiceScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>PickVoiceScreen</Text>
      <Button title="Dismiss" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default PickVoiceScreen;
