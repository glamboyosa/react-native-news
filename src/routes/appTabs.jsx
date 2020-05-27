import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';
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
            iconName = 'ios-bookmarks-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <AppTabs.Screen name='Home' component={() => <View>Hi</View>} />
      <AppTabs.Screen
        name='Bookmarks'
        component={() => <View>Bookmark</View>}
      />
    </AppTabs.Navigator>
  );
}
export default AppTabs;
