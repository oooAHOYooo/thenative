import { StyleSheet } from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import songCollection from '../../data/songCollection.json';
import { FlatList, TouchableOpacity } from 'react-native';
import { Player, MediaStates } from 'react-native-audio-toolkit';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import React, { useState } from 'react';

export default function TabFourScreen() {
    const [currentSong, setCurrentSong] = useState(null);

    const playSong = (song) => {
        console.log('Attempting to play song:', song);
        if (currentSong) {
          SoundPlayer.stop();
        }
        try {
          console.log('Playing URL:', song.mp3url);
          SoundPlayer.playUrl(song.mp3url);
          setCurrentSong(song);
        } catch (e) {
          console.log(`Cannot play the sound file`, e);
        }
      };
  
    const renderItem = ({ item }) => (
      <View style={styles.row}>
        <Text style={styles.title}>{item.songTitle}</Text>
        <Text style={styles.artist}>{item.artist}</Text>
        <TouchableOpacity onPress={() => playSong(item)}>
          <Text style={styles.playButton}>Play</Text>
        </TouchableOpacity>
      </View>
    );
  





    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Songs</Text>
        <FlatList
          data={songCollection.songs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(0, 14, 19)', // Dark theme background color

    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'left',
      color: '#00f2ff', // Dark theme text color

    },
    artist: {
      fontSize: 16,
      textAlign: 'left',
      color: '#00f2ff', // Dark theme text color

    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
    playButton: {
      
      color: '#ffd900', // Gold color

    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
