import React from 'react'
import { StyleSheet } from "react-native"
import { Text } from "react-native"
import { View } from "react-native"

const Subtile = ({text}) => {
  return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{text} </Text>
      </View>

  )
}

export default Subtile

const styles = StyleSheet.create({
  
    subtitle: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
  
      color: "#e2b497",
    },
    subtitleContainer: {
      padding: 6,
      borderBottomWidth: 2,
      borderBottomColor: "white",
      marginHorizontal: 12,
      marginVertical: 4,
    },
  
  });