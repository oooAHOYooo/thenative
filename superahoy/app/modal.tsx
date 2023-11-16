import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button, Image } from 'react-native';

import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Sign in to Ahoy</Text>
      <Button 
        title="Sign in with Google" 
        onPress={() => {}} 
        color="#ff0060"
      />
      <View style={styles.welcomeMessage}>
        <Text id="userName" style={styles.userName}></Text>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3f3a7',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  logo: {
    width: '50%',
    resizeMode: 'contain',
    margin: 10,
  },
  welcomeMessage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    alignItems: 'center',
  },
  userName: {
    fontSize: 3 * 16, // em to pixel conversion
    fontWeight: 'bold',
    color: '#333',
  },
});