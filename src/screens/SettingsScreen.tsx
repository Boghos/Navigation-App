import { View, Text, Button } from 'react-native';
import React from 'react';

const SettingsScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button title="Pick Voice" onPress={navigation.push('PickVoiceScreen')} />
      <Button
        title="Set Company ID"
        onPress={navigation.push('SetCompanyIDScreen')}
      />
    </View>
  );
};

export default SettingsScreen;
