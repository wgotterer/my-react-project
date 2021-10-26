import React from "react";

function FavoriteCards({meal, handleDelete}) {
    


  return (
    <>
    <h1>{meal.strMeal}</h1>
    <img height="300" width="300" src={meal.strMealThumb} />
    <button  onClick={()=>handleDelete(meal)}>I don't need you anymore as I have mastered the recipe</button>
    </>

  )
}

export default FavoriteCards;