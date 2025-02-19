import React from 'react';
import {StyleSheet, ImageBackground, FlatList, Text} from 'react-native';
import FullCourtHeader from '../components/FullCourtHeader';
import FullCourtMenuComponent from '../components/FullCourtMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {southernBBQ} from '../assets/products';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderProduct = ({item, index}) => (
    <FullCourtMenuComponent item={item} index={index} />
  );
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <FullCourtHeader />

      <Text style={styles.title}>Главная</Text>

      <FlatList
        data={southernBBQ}
        renderItem={renderProduct}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.main}
        numColumns={1}
        horizontal={false}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    paddingBottom: 100,
    alignItems: 'center',
    width,
  },
  image: {
    width: '100%',
    height: 80,
    objectFit: 'contain',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    paddingVertical: 5,
    backgroundColor: COLORS.main,
  },
});
