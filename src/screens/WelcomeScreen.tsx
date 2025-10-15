import { View, Text, Button } from 'react-native';
import React from 'react';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Button
        title="Get Started"
        onPress={() => navigation.push('EnterCompanyIDScreen')}
      />
    </View>
  );
};

export default WelcomeScreen;
