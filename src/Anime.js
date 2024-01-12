import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Anime = () => {
  return (
    <View>
      <Text style={styles.garchig}>Anime</Text>
    </View>
  )
}

export default Anime

const styles = StyleSheet.create({
    garchig: {
        color: 'white',
        fontSize: 50,
        backgroundColor: 'black',
    }
})