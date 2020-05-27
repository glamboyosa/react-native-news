import React, { useState, createContext } from 'react';
export const BookmarkContext = createContext({
  bookmarks: [],
  addToBookmarks: () => {},
});
const BookmarkContextProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const addToBookmarks = (newBookmark) => {
    setBookmarks((prevState) => prevState.concat(...newBookmark));
  };
  return (
    <BookmarkContext.Provider value={{ bookmarks, addToBookmarks }}>
      {children}
    </BookmarkContext.Provider>
  );
};
export default BookmarkContextProvider;
