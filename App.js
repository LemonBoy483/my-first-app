import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TicTac from './src/TicTac';
import Goal from './src/Goal';
import Anime from './src/Anime';

export default function App() {
  return (
    <View>
      <Text>HELLO GIT TEST</Text>
      <Text>123</Text>
      <Goal />
      <TicTac />
      {/* <Anime /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
