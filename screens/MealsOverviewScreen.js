import React, { useEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealList from "../components/meals-list/MealList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.mealCatId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

return <MealList items={displayedMeals}  />
};

export default MealsOverviewScreen;


