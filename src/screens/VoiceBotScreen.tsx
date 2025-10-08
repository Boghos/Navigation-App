import { View, Text, Button } from 'react-native';
import React from 'react';

const VoiceBotScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>VoiceBotScreen</Text>
      <Button title="Dismiss" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default VoiceBotScreen;
