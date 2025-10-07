import { View, Text, Button } from 'react-native';
import React from 'react';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Welcome Screen</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.push('EnterCompanyID')}
      />
    </View>
  );
};

export default WelcomeScreen;
