import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Splashscreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation App</Text>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // center vertically
    alignItems: 'center', // center horizontally
    backgroundColor: '#f8f9fa', // light background
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#007AFF',
    marginBottom: 30,
  },
});
