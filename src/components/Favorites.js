import React, {useRef, useEffect} from "react";
import FavoriteCards from "./FavoriteCards";

function Favorites({faveMeals, handleDelete}) {

  console.log(faveMeals[0])
  const prevMealRef = useRef(faveMeals.length)

  useEffect(() => {
    if(faveMeals.length === 4){
      window.alert("By golly! You sure like food! You'll be cookin' up a storm!");
    }
    prevMealRef.current = faveMeals
  }, [faveMeals])

  return (
    <div>
      <h2 className="fave-title">Your Favorites</h2>
      {faveMeals.map((meal)=> <FavoriteCards handleDelete={handleDelete} key={meal.idMeal} meal={meal} /> )}
    </div>
  );
}

export default Favorites;