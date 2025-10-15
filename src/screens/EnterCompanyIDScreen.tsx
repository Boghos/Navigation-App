import { View, Text, Button, Alert, TextInput } from 'react-native';
import React from 'react';
import { useState } from 'react';

const EnterCompanyIDScreen = ({ navigation, route }: any) => {
  const [companyID, setCompanyID] = useState('');
  const source = route?.params?.source ?? 'onboarding';
  const handleContinue = () => {
    // Example validation
    if (companyID.trim() === '') {
      Alert.alert('Error', 'Please enter a valid Company ID');
      return;
    }
    if (source === 'onboarding') {
      // ✅ Go to Pick Voice screen in onboarding flow
      navigation.navigate('OnBoardingStack', { screen: 'OnboardingPickVoice' });
    } else {
      // If this screen was reached from settings (SettingsEnterCompanyID)
      navigation.goBack();
    }
  };
  return (
    <View>
      <TextInput
        placeholder="Enter Company ID"
        value={companyID}
        onChangeText={setCompanyID}
      />

      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
};

export default EnterCompanyIDScreen;
