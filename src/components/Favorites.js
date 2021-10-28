import React from "react";
import FavoriteCards from "./FavoriteCards";

function Favorites({faveMeals, handleDelete}) {

  console.log(faveMeals)
  

  return (
    <div>
      <h2 className="fave-title">Your Favorites</h2>
      {faveMeals.map((meal)=> <FavoriteCards handleDelete={handleDelete} key={meal.idMeal} meal={meal} /> )}
    </div>
  );
}

export default Favorites;