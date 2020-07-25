import React, { useContext, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import RootStack from './src/routes/rootStack';
import { BookmarkContext } from './src/libs/providers/bookmarksProvider';
import axios from 'axios';
import BookmarkContextProvider from './src/libs/providers/bookmarksProvider';
const App = () => {
  const { addToBookmarks } = useContext(BookmarkContext);
  useEffect(() => {
    const bookmarks = AsyncStorage.getItem('bookmarks').then((bookmarks) =>
      JSON.parse(bookmarks)
    );
    if (bookmarks) {
      console.log(bookmarks);
      addToBookmarks(bookmarks);
    }
  }, []);
  axios.defaults.baseURL = 'https://newsapi.org/v2/';
  return (
    <BookmarkContextProvider>
      <RootStack />
    </BookmarkContextProvider>
  );
};

export default App;
