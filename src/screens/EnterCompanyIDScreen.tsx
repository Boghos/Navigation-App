import { View, Text, Button } from 'react-native';
import React from 'react';

const EnterCompanyIDScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>EnterCompanyID</Text>
      <Button
        title="Continue"
        onPress={() => navigation.push('OnboardingPickVoice')}
      />
    </View>
  );
};

export default EnterCompanyIDScreen;
