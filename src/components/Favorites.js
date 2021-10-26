import React from "react";
import FavoriteCards from "./FavoriteCards";

function Favorites({faveMeals, handleDelete}) {

  console.log(faveMeals)
  

  return (
    <div>
      <h1> Favorites List </h1>
      {faveMeals.map((meal)=> <FavoriteCards handleDelete={handleDelete} key={meal.idMeal} meal={meal} /> )}
    </div>
  );
}

export default Favorites;