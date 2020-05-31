import React, { useContext } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import useFetch from '../libs/hooks/useFetch';
import Card from '../components/card';
import Message from '../components/message';
import { BookmarkContext } from '../libs/providers/bookmarksProvider';
const UK = ({ navigation }) => {
  const { addToBookmarks, bookmarks } = useContext(BookmarkContext);
  const [fontsLoaded] = useFonts({
    'NotoSansJP-Regular': require('../../assets/fonts/NotoSansJP-Regular.otf'),
    'NotoSansJP-Bold': require('../../assets/fonts/NotoSansJP-Bold.otf'),
  });
  const { data, loading, error, refetch } = useFetch(
    '/top-headlines?sources=bbc-news&apiKey=43003c6359aa4341af71dcda5cc7b0e9'
  );
  if (!fontsLoaded || loading) {
    return <AppLoading />;
  }
  if (!!error) {
    return (
      <Message
        onPressHandler={() => refetch()}
        style={{ fontFamily: 'NotoSansJP-Regular' }}
      >
        {error}
      </Message>
    );
  }
  const addToBookmarksHandler = (title) => {
    const newsArticle = data.filter((el) => el.title === title);
    if (newsArticle.length > 0) {
      addToBookmarks(newsArticle);
    }
  };

  return (
    <View style={styles.container}>
      <Card
        data={data}
        style={{ fontFamily: 'NotoSansJP-Regular' }}
        addToBookmarks={addToBookmarksHandler}
        navigationHandler={(title, content, image, source, url, description) =>
          navigation.navigate('Article', {
            title,
            content,
            image,
            source,
            tagLine: '#UKNews',
            url,
            description,
          })
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 10,
  },
});
export default UK;
