import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Card = ({ data }) => {
  let count = 0;
  return (
    <ScrollView>
      {data.slice(0, 2).map((el) => (
        <View style={styles.container}>
          <Text style={styles.heading}>{el.title}</Text>
          <View style={styles.newsItemContainer}>
            {/* {console.log(
              el.description
                .split(' ')
                .reduce((newArr, el) => {
                  if (count < 7) {
                    newArr.push(el);
                    count++;
                  }
                  return newArr;
                }, [])
                .concat('...')
                .join(' ')
            )} */}
            <Text style={styles.text}>
              {el.description
                .split(' ')
                .reduce((newArr, el) => {
                  if (count < 10) {
                    newArr.push(el);
                    count++;
                  }
                  return newArr;
                }, [])
                .concat('...')
                .join(' ')}
            </Text>
          </View>
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
    padding: 2,
    marginBottom: 10,
  },
  heading: {
    textAlign: 'center',
    fontSize: 15,
  },
  text: {
    fontSize: 10,
  },
  newsItemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
});
export default Card;
