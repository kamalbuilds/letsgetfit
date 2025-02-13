import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SuggestionsPage = ({ suggestions, onGenerateSuggestions }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Suggestions</Text>
      {suggestions.length > 0 ? (
        suggestions.map((suggestion, index) => (
          <Text key={index} style={styles.suggestion}>{suggestion}</Text>
        ))
      ) : (
        <Text style={styles.noSuggestions}>No suggestions available. Please generate suggestions.</Text>
      )}
      <Button title="Generate Suggestions" onPress={onGenerateSuggestions} />
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
  suggestion: {
    fontSize: 18,
    marginBottom: 10,
    color: '#8b4513',
  },
  noSuggestions: {
    fontSize: 18,
    marginBottom: 20,
    color: '#8b4513',
  },
});

export default SuggestionsPage;
