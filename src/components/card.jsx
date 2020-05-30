import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card = ({ data }) => {
  let count = 0;
  return (
    <ScrollView>
      {data.slice(0, 2).map((el) => (
        <View style={styles.container}>
          <Text style={styles.heading}>{el.title}</Text>
        </View>
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
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
  },
});
export default Card;
