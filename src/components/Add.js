// src/components/About.js
import React from "react";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard"

function Add() {

// const [addRecipe, setAddRecipe] = useState([])
const [allRecipes, setAllRecipes] = useState([])


 
 function handleSubmit(e){
   e.preventDefault()
   //console.log(e.target.image.value)
 const newMeal = {
      "strMeal": e.target.name.value,
      "strIngredients": e.target.ingredients.value,
      "strInstructions": e.target.instructions.value,
      "strMealThumb": e.target.image.value,
       }
       fetch("http://localhost:8000/recipes", {
         method:'POST',
         headers:  {
           "Content-type": "application/json"
         },
         body: JSON.stringify(newMeal)
       })
       .then(response => response.json())
       .then(data => setAllRecipes([data, ...allRecipes]))
     }
     
     useEffect(() => {
        fetch("http://localhost:8000/recipes")
        .then(response => response.json())
        .then(data => setAllRecipes(data))
     }, [])

    
     
     function deleteRecipe(recipe){
      fetch(`http://localhost:8000/recipes/${recipe.id}`, {
        method: "DELETE"
      })
      .then(()=> setAllRecipes(allRecipes.filter((meal)=> meal.id !== recipe.id)))
  }
      

 return (
  <div className="new-recipe-form">
    <h2>New Recipe</h2>
    <form  onSubmit={handleSubmit}>
      <input   type="text" name="name" placeholder="Recipe name" />
      <input   type="text" name="image" placeholder="Image URL" />
      <input   type="text" name="ingredients" placeholder="Ingredients"/>
      <input   type="text" name="instructions"  placeholder="Instructions" />
      <button  type="submit"> Add Recipe</button>
    </form>
  {allRecipes.map((recipe)=> <RecipeCard recipe={recipe} deleteRecipe={deleteRecipe}/>)}
  </div>
)
}
export default Add;
