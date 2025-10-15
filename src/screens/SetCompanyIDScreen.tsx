import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const SetCompanyIDScreen = ({ navigation }: any) => {
  const validCompanyIDs = ['ABC123', 'XYZ789', 'COMP001'];
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Select a valid company ID from below:</Text>
      <View style={styles.listContainer}>
        {validCompanyIDs.map(id => (
          <TouchableOpacity
            key={id}
            style={styles.idButton}
            onPress={() => {
              console.log(`Company ID "${id}" selected`);
            }}
          >
            <Text style={styles.idText}>{id}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('SettingsEnterCompanyID', { source: 'settings' })
        }
      >
        <Text style={styles.buttonText}>Set other company ID</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetCompanyIDScreen;

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
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  listContainer: {
    alignItems: 'center',
  },
  idButton: {
    backgroundColor: '#E9F1FF',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  idText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
