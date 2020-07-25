import React, { useContext } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import useFetch from '../libs/hooks/useFetch';
import Card from '../components/card';
import { BookmarkContext } from '../libs/providers/bookmarksProvider';
import Message from '../components/message';
const Sports = ({ navigation }) => {
  const { addToBookmarks } = useContext(BookmarkContext);
  const [fontsLoaded] = useFonts({
    'NotoSansJP-Regular': require('../../assets/fonts/NotoSansJP-Regular.otf'),
    'NotoSansJP-Bold': require('../../assets/fonts/NotoSansJP-Bold.otf'),
  });
  const { data, loading, error, refetch } = useFetch(
    '/everything?q=sports&domains=cnn.com&apiKey=43003c6359aa4341af71dcda5cc7b0e9'
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
        addToBookmarks={addToBookmarksHandler}
        style={{ fontFamily: 'NotoSansJP-Regular' }}
        navigationHandler={(title, content, image, source, url, description) =>
          navigation.navigate('Article', {
            title,
            content,
            image,
            source,
            tagLine: '#SportsNews',
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
export default Sports;
