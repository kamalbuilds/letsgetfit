import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UserDetailsPage = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [problems, setProblems] = useState('');
  const [goals, setGoals] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('User Details Submitted:', { weight, height, problems, goals });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Weight"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Height"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Health Problems"
        value={problems}
        onChangeText={setProblems}
      />
      <TextInput
        style={styles.input}
        placeholder="Fitness Goals"
        value={goals}
        onChangeText={setGoals}
      />
      <Button title="Submit" onPress={handleSubmit} />
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
  input: {
    height: 40,
    borderColor: '#8b4513',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: '#fffaf0',
  },
});

export default UserDetailsPage;
