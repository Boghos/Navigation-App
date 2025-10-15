import {
  View,
  Text,
  Button,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Enter Company ID"
          value={companyID}
          onChangeText={setCompanyID}
        />

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EnterCompanyIDScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#fafafa',
    marginBottom: 24,
  },
  button: {
    height: 52,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});
