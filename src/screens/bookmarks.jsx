import React, { useContext } from 'react';
import { View, StatusBar, StyleSheet, Text } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Card from '../components/card';
import { BookmarkContext } from '../libs/providers/bookmarksProvider';
import Message from '../components/message';
const Bookmarks = ({ navigation }) => {
  const { bookmarks } = useContext(BookmarkContext);
  const [fontsLoaded] = useFonts({
    'NotoSansJP-Regular': require('../../assets/fonts/NotoSansJP-Regular.otf'),
    'NotoSansJP-Bold': require('../../assets/fonts/NotoSansJP-Bold.otf'),
  });
  console.log(bookmarks);
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      {bookmarks.length === 0 ? (
        <Message bookmarksScreen style={{ fontFamily: 'NotoSansJP-Regular' }}>
          You don't have anything saved for offline reading :(
        </Message>
      ) : (
        <Card
          data={bookmarks}
          style={{ fontFamily: 'NotoSansJP-Regular' }}
          navigationHandler={(
            title,
            content,
            image,
            source,
            url,
            description
          ) =>
            navigation.navigate('Article', {
              title,
              content,
              image,
              source,
              tagLine: '#Bookmarks',
              url,
              description,
            })
          }
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 10,
  },
});
export default Bookmarks;
