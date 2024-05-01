import React from 'react'
import { Pressable } from "react-native"
import {Ionicons} from "@expo/vector-icons"
import { StyleSheet } from "react-native"

const IconBtn = ({onPress, color, icon}) => {
  return (
   <Pressable  onPress={onPress}  style={({pressed}) => pressed && styles.pressed } >
    <Ionicons  name={icon}  size={24} color={color}    />


   </Pressable>
  )
}

export default IconBtn


const styles = StyleSheet.create({
  
    pressed: {
     opacity:0.5
    },
   textItem: {
      color: "#351401",
     textAlign:"center"
    },
  
  });
