import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { useFonts } from '@use-expo/font';
import * as Linking from 'expo-linking';
import { AppLoading } from 'expo';
import useResponsiveScreen from '../libs/hooks/useResponsiveScreen';
const Article = ({ route }) => {
  const {
    tagLine,
    title,
    content,
    image,
    source,
    url,
    description,
  } = route.params;
  let count = 0;

  const { responsiveWidth, responsiveHeight } = useResponsiveScreen();
  const [fontsLoaded] = useFonts({
    'NotoSansJP-Regular': require('../../assets/fonts/NotoSansJP-Regular.otf'),
    'NotoSansJP-Bold': require('../../assets/fonts/NotoSansJP-Bold.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ScrollView style={styles.container}>
      <Image
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(50),
          flex: 1,
        }}
        source={{
          uri: !!image
            ? image
            : 'https://images.unsplash.com/photo-1571292098320-997aa03a5d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        }}
      />
      <View style={styles.tag}>
        <Text style={{ ...styles.tagLine, fontFamily: 'NotoSansJP-Bold' }}>
          {tagLine}
        </Text>
      </View>
      <View style={{ ...styles.content, fontFamily: 'NotoSansJP-Regular' }}>
        <Text
          style={{ ...styles.contentSource, fontFamily: 'NotoSansJP-Regular' }}
        >
          {source}
        </Text>
        <Text style={{ ...styles.contentTitle, fontFamily: 'NotoSansJP-Bold' }}>
          {title}
        </Text>
        <Text
          style={{ ...styles.contentText, fontFamily: 'NotoSansJP-Regular' }}
        >
          {!!content
            ? content
                .split(' ')
                .reduce((arr, el) => {
                  if (count < 23) {
                    arr.push(el);
                    count++;
                  }
                  return arr;
                }, [])
                .join(' ')
            : description}
        </Text>
        <Text
          style={{ ...styles.contentText, fontFamily: 'NotoSansJP-Regular' }}
          onPress={() => Linking.openURL(url)}
        >
          ...View More
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 10,
  },

  tag: {
    backgroundColor: '#fff',
    flex: 1,
  },
  tagLine: {
    marginLeft: 15,
    fontSize: 15,
    color: '#9932CC',
  },
  content: {
    backgroundColor: '#e3e3e3',
    flex: 1,
  },
  contentSource: {
    fontSize: 25,
    marginTop: 10,
    marginLeft: 15,
  },
  contentTitle: {
    fontSize: 30,
    textAlign: 'center',
    margin: 15,
  },
  contentText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
  },
});
export default Article;
