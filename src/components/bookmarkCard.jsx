import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const BookmarkCard = () => (
  <View style={styles.card}>
    <Text style={styles.text}>BOOKMARKED!</Text>
  </View>
);
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#228B22',
    padding: 10,
    marginBottom: 15,
    zIndex: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});
export default BookmarkCard;
