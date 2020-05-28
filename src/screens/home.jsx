import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  Button,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import useResponsiveScreen from '../libs/hooks/useResponsiveScreen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const { responsiveHeight, responsiveWidth } = useResponsiveScreen();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Headlines')}
        >
          <View
            style={
              (styles.imageParent,
              { width: responsiveWidth(30), height: responsiveHeight(30) })
            }
          >
            <Image
              source={require('../../assets/headlines.jpg')}
              style={styles.image}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Sports')}>
          <View
            style={
              (styles.imageParent,
              { width: responsiveWidth(30), height: responsiveHeight(30) })
            }
          >
            <Image
              source={require('../../assets/sports.jpg')}
              style={styles.image}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('UK')}>
          <View
            style={
              (styles.imageParent,
              { width: responsiveWidth(30), height: responsiveHeight(30) })
            }
          >
            <Image
              source={require('../../assets/UK.jpg')}
              style={styles.image}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('US')}>
          <View
            style={
              (styles.imageParent,
              { width: responsiveWidth(30), height: responsiveHeight(30) })
            }
          >
            <Image
              source={require('../../assets/US.jpg')}
              style={styles.image}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageParent: {
    borderRadius: 8,
    marginRight: 5,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
export default Home;
