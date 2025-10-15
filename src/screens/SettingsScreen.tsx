import { View, Text, Button } from 'react-native';
import React from 'react';

const SettingsScreen = ({ navigation }: any) => {
  return (
    <View>
      <Button
        title="Pick Voice"
        onPress={() => navigation.navigate('SettingsPickVoice')}
      />
      <Button
        title="Set Company ID"
        onPress={() => navigation.navigate('SetCompanyIDScreen')}
      />
    </View>
  );
};

export default SettingsScreen;
