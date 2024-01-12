import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TicTac from './src/TicTac';
import Goal from './src/Goal';
import Anime from './src/Anime';

export default function App() {
  return (
    <View>
      <Text></Text>
      <Text></Text>
      <Goal />
      <TicTac />
      {/* <Anime /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
