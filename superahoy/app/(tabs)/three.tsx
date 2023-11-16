import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import React from 'react';
import { FlatList, Image } from 'react-native';
import artistData from '../../data/artistCollection.json'; 


export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>List of Artists</Text>
    <FlatList
      data={artistData.artists}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
      
          <Text style={styles.artistName}>{item.name}</Text>
          {/* Add other details you want to show */}
        </View>
      )}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'rgb(0, 14, 19)',
    maxWidth: 600,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00f2ff',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#00e5ff',
  },
  artistName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#00f2ff',
  },
  // Add other styles as needed
});
