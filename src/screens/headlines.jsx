import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const Headlines = ({ navigation }) => (
  <View style={{ marginTop: StatusBar.currentHeight + 10 }}>
    <Text onPress={() => navigation.goBack()}>These are headlines</Text>
  </View>
);
export default Headlines;
