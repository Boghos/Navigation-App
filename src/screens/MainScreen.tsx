import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';

const MainScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>MainScreen</Text>
      <Button
        title="Open Settings"
        onPress={() => navigation.navigate('SettingsModal')}
      />
    </View>
  );
};

export default MainScreen;
