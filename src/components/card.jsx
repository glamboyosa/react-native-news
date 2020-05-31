import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import BookmarkCard from './bookmarkCard';
const Card = ({ data, addToBookmarks, navigationHandler, home, style }) => {
  return (
    <ScrollView>
      {home
        ? data.slice(0, 3).map((el) => (
            <Swipeable
              renderLeftActions={BookmarkCard}
              onSwipeableLeftOpen={() => addToBookmarks(el.title)}
            >
              <View style={styles.container}>
                <Text
                  onPress={() =>
                    navigationHandler(
                      el.title,
                      el.content,
                      el.urlToImage,
                      el.source.name,
                      el.url,
                      el.description
                    )
                  }
                  style={{ ...styles.heading, ...style }}
                >
                  {el.title}
                </Text>
              </View>
            </Swipeable>
          ))
        : data.map((el) => (
            <Swipeable
              renderLeftActions={BookmarkCard}
              onSwipeableLeftOpen={() => addToBookmarks(el.title)}
            >
              <View style={styles.container}>
                <Text
                  onPress={() =>
                    navigationHandler(
                      el.title,
                      el.content,
                      el.urlToImage,
                      el.source.name
                    )
                  }
                  style={styles.heading}
                >
                  {el.title}
                </Text>
              </View>
            </Swipeable>
          ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
    shadowColor: '#000',
    shadowOffset: { height: 1.5 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 2,
    padding: 10,
    marginBottom: 15,
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
  },
});
export default Card;
