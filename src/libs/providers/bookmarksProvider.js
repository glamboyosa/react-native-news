import React, { useState, createContext } from 'react';
import { AsyncStorage } from 'react-native';
export const BookmarkContext = createContext({
  bookmarks: [],
  addToBookmarks: () => {},
});
// TODO: set the bookmarks to async storage inside the setBookmarks handler
const BookmarkContextProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const addToBookmarks = (newBookmark) => {
    setBookmarks((prevState) => {
      AsyncStorage.setItem(
        'bookmarks',
        JSON.stringify(prevState.concat(...newBookmark))
      );
      return prevState.concat(...newBookmark);
    });
  };
  return (
    <BookmarkContext.Provider value={{ bookmarks, addToBookmarks }}>
      {children}
    </BookmarkContext.Provider>
  );
};
export default BookmarkContextProvider;
