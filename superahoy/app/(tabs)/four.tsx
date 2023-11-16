import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabFourScreen() {
    const data = [
        { key: '1', artist: 'Artist 1' },
        { key: '2', artist: 'Artist 2' },
        // Add more data here
      ];
  
    return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Podcasts</Text>
      <Text>This is where we are going to have a table</Text>
      <Text>Artist Name</Text>










      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
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
