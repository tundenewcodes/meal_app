import React, { useContext, useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";
import Subtile from "../components/Subtile";
import List from "../components/List";
import { ScrollView } from "react-native";
import { Button } from "react-native";
import IconBtn from "../components/IconBtn";
import { FavoriteContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavoite } from "../store/redux/favorite";

const MealDetailsScreen = ({ route, navigation }) => {
  const id = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === id);

  // const favoriteMealCtx = useContext(FavoriteContext)
  const favoriteMealsId = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const isFavoriteMeal = favoriteMealsId.includes(id);

  //const isFavoriteContext = favoriteMealCtx.ids.includes(id)

  const changeFavoriteMealStatusHandler = () => {
    if (isFavoriteMeal) {
      dispatch(removeFavoite({id}));
    } else {
      dispatch(addFavorite({id}));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconBtn
          onPress={changeFavoriteMealStatusHandler}
          icon={isFavoriteMeal ? "star" : "star-outline"}
          color={"white"}
        />
      ),
    });
  }, [navigation, changeFavoriteMealStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{
          uri: selectedMeal.imageUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealsDetails
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        textStyle={styles.textStyle}
      />
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Subtile text={"ingredients"} />
          <List data={selectedMeal.ingredients} />

          <Subtile text={"Steps"} />

          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },

  image: {
    height: 350,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    color: "white",
  },

  textStyle: {
    color: "white",
  },
  innerContainer: {
    width: "80%",
  },
  outerContainer: {
    width: "100%",
    alignItems: "center",
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
