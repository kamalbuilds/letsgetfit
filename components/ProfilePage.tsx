import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfilePage = ({ userDetails }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
      <Text style={styles.detail}>Weight: {userDetails.weight}</Text>
      <Text style={styles.detail}>Height: {userDetails.height}</Text>
      <Text style={styles.detail}>Health Problems: {userDetails.problems}</Text>
      <Text style={styles.detail}>Fitness Goals: {userDetails.goals}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0e68c', // Retro background color
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#8b4513', // Retro text color
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
    color: '#8b4513',
  },
});

export default ProfilePage;
