import { View, Text, Button } from 'react-native';
import React from 'react';

const SetCompanyIDScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>SetCompanyIDScreen</Text>
      <Button
        title="Set other company ID"
        onPress={() => navigation.push('EnterCompanyID')}
      />
    </View>
  );
};

export default SetCompanyIDScreen;
