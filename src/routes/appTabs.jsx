import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign, EvilIcons } from '@expo/vector-icons';
import Home from '../screens/home';
import Bookmarks from '../screens/bookmarks';
import PersistAppTabsStack from './persistAppTabs';
function AppTabs() {
  const AppTabs = createBottomTabNavigator();
  return (
    <AppTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          if (route.name === 'Home') {
            return <AntDesign name={'home'} size={size} color={color} />;
          } else if (route.name === 'Bookmarks') {
            iconName = 'ios-information-circle';
            return <EvilIcons name={'star'} size={size} color={color} />;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <AppTabs.Screen name='Home' component={PersistAppTabsStack} />
      <AppTabs.Screen name='Bookmarks' component={Bookmarks} />
    </AppTabs.Navigator>
  );
}
export default AppTabs;
