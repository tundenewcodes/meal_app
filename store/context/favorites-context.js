import { createContext, useState } from "react";


export const FavoriteContext = createContext({
    ids:[],
    addFavorite :(id) =>{},
    removeFAvorite :(id) =>{},
})

const FavoriteContextProvider = ({children})=>{
const [favMealId, setFavMealId] = useState([])


const addFavoriteMealId = (favMealId) =>{
    setFavMealId(prevMealId => [...prevMealId, favMealId])
}

const removeFavoriteMealId = (favMealId) =>{
    setFavMealId(prevMealId => prevMealId.filter(mealId => mealId !== favMealId))
}


const value ={
    ids:favMealId,
    addFavorite:addFavoriteMealId,
    removeFAvorite:removeFavoriteMealId
}
return (<FavoriteContext.Provider value={value} >
    {children}
</FavoriteContext.Provider>)
}

export default FavoriteContextProvider