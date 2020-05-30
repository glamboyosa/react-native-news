import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import useResponsiveScreen from '../libs/hooks/useResponsiveScreen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import useFetch from '../libs/hooks/useFetch';
import Card from '../components/card';
const Home = ({ navigation }) => {
  const { responsiveHeight, responsiveWidth } = useResponsiveScreen();
  const [fontsLoaded] = useFonts({
    'NotoSansJP-Regular': require('../../assets/fonts/NotoSansJP-Regular.otf'),
    'NotoSansJP-Bold': require('../../assets/fonts/NotoSansJP-Bold.otf'),
  });
  const { data, loading, error } = useFetch(
    '/top-headlines?sources=cnn&apiKey=43003c6359aa4341af71dcda5cc7b0e9'
  );
  if (!fontsLoaded || loading) {
    return <AppLoading />;
  }

  console.log(data);
  console.log(error);
  console.log(loading);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: 'NotoSansJP-Bold',
          ...styles.heading,
        }}
      >
        top stories
      </Text>
      <ScrollView horizontal={true}>
        <View style={styles.galleryFlexParent}>
          <TouchableWithoutFeedback
            style={styles.imageParent}
            onPress={() => navigation.navigate('Headlines')}
          >
            <Text
              style={{
                fontFamily: 'NotoSansJP-Regular',
                ...styles.cardHeading,
              }}
            >
              Headlines
            </Text>
            <View
              style={{
                width: responsiveWidth(60),
                height: responsiveHeight(40),
              }}
            >
              <Image
                source={require('../../assets/headlines.jpg')}
                style={styles.image}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            style={styles.imageParent}
            onPress={() => navigation.navigate('Sports')}
          >
            <Text
              style={{
                fontFamily: 'NotoSansJP-Regular',
                ...styles.cardHeading,
              }}
            >
              Sports
            </Text>
            <View
              style={{
                width: responsiveWidth(60),
                height: responsiveHeight(40),
              }}
            >
              <Image
                source={require('../../assets/sports.jpg')}
                style={styles.image}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            style={styles.imageParent}
            onPress={() => navigation.navigate('UK')}
          >
            <Text
              style={{
                fontFamily: 'NotoSansJP-Regular',
                ...styles.cardHeading,
              }}
            >
              UK
            </Text>
            <View
              style={{
                width: responsiveWidth(60),
                height: responsiveHeight(40),
              }}
            >
              <Image
                source={require('../../assets/UK.jpg')}
                style={styles.image}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            style={styles.imageParent}
            onPress={() => navigation.navigate('US')}
          >
            <Text
              style={{
                fontFamily: 'NotoSansJP-Regular',
                ...styles.cardHeading,
              }}
            >
              US
            </Text>
            <View
              style={{
                width: responsiveWidth(60),
                height: responsiveHeight(40),
              }}
            >
              <Image
                source={require('../../assets/US.jpg')}
                style={styles.image}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
      <Card data={data} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 10,
    fontFamily: 'NotoSansJP-Regular',
  },
  imageParent: {
    marginRight: 10,
    position: 'relative',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 8,
  },
  cardHeading: {
    color: 'white',
    zIndex: 300,
    position: 'absolute',
    bottom: 12,
    left: 10,
    fontSize: 15,
  },
  heading: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  galleryFlexParent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
});
export default Home;
