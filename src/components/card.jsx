import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, text }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>{title}</Text>
    <Text>
      {text
        .split(' ')
        .reduce((arr, el) => {
          if (arr.length < 9) {
            return arr.push(el);
          }
        }, [])
        .push('...more')
        .join('')}
    </Text>
  </View>
);
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
  },
  heading: {
    textAlign: 'center',
    fontSize: 3.5,
  },
});
export default Card;
