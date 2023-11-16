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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
