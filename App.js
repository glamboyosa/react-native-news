import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './src/routes/rootStack';
import axios from 'axios';
import BookmarkContextProvider from './src/libs/providers/bookmarksProvider';
export default function App() {
  axios.defaults.baseURL = 'https://newsapi.org/v2/';
  return (
    <BookmarkContextProvider>
      <RootStack />
    </BookmarkContextProvider>
  );
}
