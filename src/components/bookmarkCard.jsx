import React from 'React';
import { View, Text, StyleSheet } from 'react-native';
const BookmarkCard = () => (
  <View style={styles.card}>
    <Text style={styles.text}>BOOKMARKED!</Text>
  </View>
);
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#228B22',
    padding: 2,
  },
  text: {
    fontSize: 3.5,
  },
});
export default BookmarkCard;
