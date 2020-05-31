import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Message({
  children,
  style,
  bookmarksScreen,
  onPressHandler,
}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, ...style }}>{children}</Text>
      {!bookmarksScreen && (
        <Button title='try again' onPress={onPressHandler} />
      )}
    </View>
  );
}
