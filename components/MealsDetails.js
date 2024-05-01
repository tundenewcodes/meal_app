import React from 'react'
import { StyleSheet, Text, View } from "react-native"

const MealsDetails = ({ duration, complexity, affordability, style, textStyle}) => {
  return (
  
    <View style={[styles.details,style]}>
    <Text style={[styles.detailsItem, textStyle]}>{duration}m</Text>
    <Text style={[styles.detailsItem, textStyle]}>{complexity.toUpperCase()}</Text>
    <Text style={[styles.detailsItem, textStyle]}>{affordability.toUpperCase()}</Text>
  </View>
  )
}

export default MealsDetails


const styles = StyleSheet.create({
  
    details: {
      flexDirection: "row",
      padding: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    detailsItem: {
      fontSize: 12,
      marginHorizontal: 4,
    },
 
    
  });
  