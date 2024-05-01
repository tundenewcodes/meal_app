import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/meals-list/MealList";
// import { FavoriteContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoriteScreen = () => {
  //const favoriteCtx = useContext(FavoriteContext);
  const favoriteMeal = useSelector(state => state.favoriteMeals.ids)
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMeal.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <View  style={styles.textView}>
          <Text style={styles.text}>
            You have no favorite meal yet. you can add some
          </Text>
        </View>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textView: {
    marginHorizontal: 8, justifyContent: "center",
    alignItems: "center",   flex: 1, textAlign:"center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
