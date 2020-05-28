import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import AppTabs from './appTabs';
import Headlines from '../screens/headlines';

const Stack = createStackNavigator();
export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ header: () => null }}
      >
        <Stack.Screen name='Home' component={AppTabs} />
        <Stack.Screen name='Headlines' component={Headlines} />
        {/* <Stack.Screen name='Sports' component={() => <View>Sports</View>} />
        <Stack.Screen name='UK' component={() => <View>UK</View>} />
        <Stack.Screen name='US' component={() => <View>US</View>} />
        <Stack.Screen
          name='Article'
          component={() => <View>individual news article</View>}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
