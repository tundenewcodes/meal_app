import React from 'react'
import { FlatList, StyleSheet, Text, View } from "react-native"
import MealItem from "./MealItem";

const MealList = ({items}) => {


    const renderMealItem = (mealItem) => {
   
        const item = mealItem?.item;
        const mealDataProps = {
          title: item.title,
          imgSrc: item?.imgSrc,
          duration: item.duration,
          complexity: item.complexity,
          affordability: item.affordability,
          id:item.id,
    
        };
 
        return <MealItem {...mealDataProps} />;
      };


    return (
        <View style={styles.screen}>
    
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </View>
      );
}

export default MealList


const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 16,
    }
  });