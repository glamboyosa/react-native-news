import React, {useContext} from 'react';
import { AsyncStorage } from 'react-native';
import RootStack from './src/routes/rootStack';
import {BookmarkContext} from './src/libs/providers/bookmarksProvider';
import axios from 'axios';
import BookmarkContextProvider from './src/libs/providers/bookmarksProvider';
const App = () => {
  /*TODO: when the app starts up, check if there's any  bookmarks in async storage
and if set bookmarks to it */
const { addToBookmarks } = useContext(BookmarkContext);

useEffect(() => {
const bookmarks = await JSON.parse(AsyncStorage.getItem('bookmarks'));
if(bookmarks){
  addToBookmarks(bookmarks)
}
}, [])
  axios.defaults.baseURL = 'https://newsapi.org/v2/';
  return (
    <BookmarkContextProvider>
      <RootStack />
    </BookmarkContextProvider>
  );
}

export default App

