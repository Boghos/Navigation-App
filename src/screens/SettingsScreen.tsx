import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const SettingsScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SettingsPickVoice')}
        >
          <Text style={styles.buttonText}>Pick Voice</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SetCompanyIDScreen')}
        >
          <Text style={styles.buttonText}>Set Company ID</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;

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
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});
