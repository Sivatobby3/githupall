import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Log from '../assets/UiImages/log.png';
import Post from '../assets/UiImages/postt.png';
import smalldp from '../assets/UiImages/smalldp.jpg';
const images = [
  {
    id: 1,
    title: 'Image 1',
    image: smalldp,
  },
  {
    id: 2,
    title: 'Image 2',
    image: Log,
  },
  {
    id: 3,
    title: 'Image 3',
    image: Post,
  },
];

const CarouselScreen = () => {
  return (
    <ScrollView horizontal pagingEnabled>
      {images.map((item) => (
        <View key={item.id}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default CarouselScreen;
