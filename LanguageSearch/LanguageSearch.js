import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const LANGUAGE_DATA = [
  {
    id: '1',
    name: 'English',
  },
  {
    id: '2',
    name: 'Spanish',
  },
  {
    id: '3',
    name: 'French',
  },
  {
    id: '4',
    name: 'German',
  },
  {
    id: '5',
    name: 'Mandarin Chinese',
  },
  {
    id: '6',
    name: 'Japanese',
  },
  {
    id: '7',
    name: 'Korean',
  },
  {
    id: '8',
    name: 'Portuguese',
  },
  {
    id: '9',
    name: 'Russian',
  },
  {
    id: '10',
    name: 'Arabic',
  },
];


const LanguageSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    setSearchTerm(text);
    const results = LANGUAGE_DATA.filter((language) => language.name.toLowerCase().includes(text.toLowerCase()));
    setSearchResults(results);
  };

  const renderLanguageItem = ({ item }) => (
    <View style={styles.languageItem}>
      <Text style={styles.languageName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a language..."
        onChangeText={handleSearch}
        value={searchTerm}
      />
      <FlatList
        data={searchResults}
        renderItem={renderLanguageItem}
        keyExtractor={(item) => item.id}
        style={styles.languageList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  languageList: {
    flex: 1,
  },
  languageItem: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  languageName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LanguageSearch;
