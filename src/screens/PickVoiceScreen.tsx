import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { CommonActions } from '@react-navigation/native';
import { useState } from 'react';

const voiceOptions = [
  {
    id: '1',
    name: 'Alex',
    description: 'Clear and professional',
    gender: 'Male',
    accent: 'American',
    icon: 'male',
  },
  {
    id: '2',
    name: 'Sarah',
    description: 'Warm and friendly',
    gender: 'Female',
    accent: 'British',
    icon: 'female',
  },
  {
    id: '3',
    name: 'James',
    description: 'Deep and authoritative',
    gender: 'Male',
    accent: 'Australian',
    icon: 'male',
  },
];

const PickVoiceScreen = ({ navigation, route }: any) => {
  const source = route?.params?.source ?? 'onboarding';
  const [selectedVoiceId, setSelectedVoiceId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedVoiceId(id);
    console.log(
      'Selected voice:',
      voiceOptions.find(v => v.id === id),
    );
  };
  const handleDismiss = () => {
    if (source === 'onboarding') {
      // End onboarding and show MainStack as the app's main content
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'MainStack' }],
        }),
      );
      // This resets navigation and reveals MainStack below.
    } else {
      // Opened from settings -> just go back in settings stack
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick a Voice</Text>
      {voiceOptions.map(voice => (
        <TouchableOpacity
          key={voice.id}
          style={[
            styles.voiceButton,
            selectedVoiceId === voice.id && styles.selectedButton,
          ]}
          onPress={() => handleSelect(voice.id)}
        >
          <Text
            style={[
              styles.voiceName,
              selectedVoiceId === voice.id && styles.selectedText,
            ]}
          >
            {voice.name} ({voice.accent})
          </Text>
          <Text
            style={[
              styles.voiceDescription,
              selectedVoiceId === voice.id && styles.selectedText,
            ]}
          >
            {voice.description}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.dismissButton} onPress={handleDismiss}>
        <Text style={styles.dismissText}>Dismiss</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PickVoiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
  },
  voiceButton: {
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  selectedButton: {
    backgroundColor: '#007AFF',
  },
  voiceName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#007AFF',
  },
  voiceDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  selectedText: {
    color: '#fff',
  },
  dismissButton: {
    marginTop: 40,
    height: 52,
    backgroundColor: '#FF3B30',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dismissText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});
