import { View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainScreen = ({ navigation }: any) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('SettingsModal')}>
        <Ionicons name="settings-outline" size={24} color="#000" />
        <Text>Open Settings</Text>
      </TouchableOpacity>
      <Button
        title="Launch Voice bot"
        onPress={() => {
          navigation.navigate('VoiceBotModal');
        }}
      />
    </View>
  );
};

export default MainScreen;
