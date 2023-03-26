import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

const CardScreen = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Cute Cat</Card.Title>
        <Card.Divider />
        <Card.Image source={{ uri: 'https://source.unsplash.com/featured/?cat' }} />
        <Card.Divider />
        <Card.FeaturedSubtitle>Cat Ipsum</Card.FeaturedSubtitle>
        <Card.FeaturedSubtitle>
          Purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Chew
          iPad power cord yet chase after silly colored fish toys around the house.
        </Card.FeaturedSubtitle>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardScreen;
