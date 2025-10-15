import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Ionicons name="chatbubbles-outline" size={64} color="#007AFF" />
        <Text style={styles.title}>Welcome to VoiceBot</Text>
        <Text style={styles.subtitle}>
          Tap below to start your voice assistant
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('VoiceBotModal');
          }}
        >
          <Text style={styles.buttonText}>Launch Voice Bot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;

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
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 6,
    textAlign: 'center',
  },
});
