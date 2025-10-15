import { View, Text, Button } from 'react-native';
import React from 'react';

const SetCompanyIDScreen = ({ navigation }: any) => {
  return (
    <View>
      <Button
        title="Set other company ID"
        onPress={() => navigation.navigate('SettingsEnterCompanyID')}
      />
    </View>
  );
};

export default SetCompanyIDScreen;
