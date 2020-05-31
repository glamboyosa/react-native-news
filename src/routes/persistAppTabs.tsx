import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import AppTabs from './appTabs';
import Headlines from '../screens/headlines';
import Sports from '../screens/sports';
import UK from '../screens/UK';
import US from '../screens/US';
import Article from '../screens/article';
import Home from '../screens/home';
const Stack = createStackNavigator();
export default function PersistAppTabsStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ header: () => null }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Headlines' component={Headlines} />
      <Stack.Screen name='Sports' component={Sports} />
      <Stack.Screen name='UK' component={UK} />
      <Stack.Screen name='US' component={US} />
      <Stack.Screen name='Article' component={Article} />
    </Stack.Navigator>
  );
}
