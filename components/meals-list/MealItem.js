import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealsDetails from "../MealsDetails";
import { checkImageURL } from "../../utils/imageHelper";
import { Constants } from "../../constants/constant";

const MealItem = ({id, title, imgSrc, duration, complexity, affordability }) => {
  const navigation = useNavigation()
  const onPressHandler = () => {
navigation.navigate("meals-details", {
  mealId: id,
})
  }
  return (
    <View style={styles.screen}>
      <Pressable  android_ripple={{color:"#cccccc"}}  style={({ pressed }) => 
         
          pressed ? styles.buttonPressed : null
        } onPress={onPressHandler} >
        <View style={styles.innerContainer}>
          <View >
            <Image
              source={{
                uri: checkImageURL(imgSrc)  ? imgSrc : Constants.image,
              }}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
       <MealsDetails complexity={complexity} duration={duration} affordability={affordability} />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  screen: {
    margin: 16,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,

    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
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

  buttonPressed: {
    opacity: 0.5,
  },
});
