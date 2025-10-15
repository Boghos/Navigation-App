import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const VoiceBotScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.chatBubble}>
          <Text style={styles.chatText}>Hi! I am your voice assistant.</Text>
        </View>

        <TouchableOpacity style={styles.micButton}>
          <Text style={styles.micText}>🎤 Tap to speak</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Dismiss</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VoiceBotScreen;

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
  button: {
    height: 52,
    backgroundColor: '#FF3B30',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  chatBubble: {
    backgroundColor: '#E0E0E0',
    borderRadius: 16,
    padding: 16,
    marginBottom: 40,
    width: '100%',
  },
  chatText: {
    fontSize: 16,
    color: '#333',
  },
  micButton: {
    height: 52,
    width: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  micText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});
