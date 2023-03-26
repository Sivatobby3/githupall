import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar, Button, Icon } from 'react-native-elements';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        rounded
        source={{ uri: 'https://source.unsplash.com/featured/?profile' }}
      />
      <Text style={styles.username}>John Doe</Text>
      <Button
        icon={<Icon name="edit" color="#ffffff" />}
        title="Edit Profile"
        buttonStyle={styles.button}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>Email: john.doe@example.com</Text>
        <Text style={styles.detailsText}>Phone: 123-456-7890</Text>
        <Text style={styles.detailsText}>Address: 123 Main St, Anytown USA</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#03A9F4',
  },
  detailsContainer: {
    marginTop: 20,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
  detailsText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProfileScreen;
