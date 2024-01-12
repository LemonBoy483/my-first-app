import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Goal = () => {
  return (
    <View>
      <Text style={styles.goal}>My Goal:</Text>
      <Text style={styles.dog}>Gadnaas baraa avch uniigen</Text>
      <Text style={styles.dog}>osgood zarah.</Text>
    </View>
  )
}

export default Goal;

const styles = StyleSheet.create({
    goal: {
        fontSize: 30,
    },
    dog: {
        fontSize: 20,
    }
})