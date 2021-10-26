// src/components/About.js
import React from "react";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard"
function Search() {

const [addRecipe, setAddRecipe] = useState([])
const [allRecipes, setAllRecipes] = useState([])


 
 function handleSubmit(e){
   e.preventDefault()
   //console.log(e.target.image.value)
 const newMeal = {
      "strMeal": e.target.name.value,
      "strCategory": e.target.category.value,
      "strInstructions": e.target.instructions.value,
      "strMealThumb": e.target.image.value,
      "strYoutube": e.target.youtubeLink.value,
       }
       fetch("http://localhost:8000/recipes", {
         method:'POST',
         headers:  {
           "Content-type": "application/json"
         },
         body: JSON.stringify(newMeal)
       })
       .then(response => response.json())
       .then(data => setAddRecipe(data))
     }
  
     useEffect(() => {
        fetch("http://localhost:8000/recipes")
        .then(response => response.json())
        .then(data => setAllRecipes(data))
     }, [])

     const newAllRecipes = [...allRecipes, addRecipe]
     
     function deleteRecipe(recipe){
      fetch(`http://localhost:8000/recipes/${recipe.id}`)
      .then(()=> setAllRecipes(newAllRecipes.filter((meal)=> meal.id !== recipe.id)))
  }
      

 return (
  <div className="new-recipe-form">
    <h2>New Recipe</h2>
    <form onSubmit={handleSubmit}>
      <input   type="text" name="name" placeholder="Recipe name" />
      <input   type="text" name="image" placeholder="Image URL" />
      <input   type="text" name="instructions"  placeholder="Instructions" />
      <input   type="text" name="youtubeLink" placeholder="Youtube"/>
      <input   type="text" name="category" placeholder="Category"/>
      <button  type="submit"> Add Recipe</button>
    </form>
  {newAllRecipes.map((recipe)=> <RecipeCard recipe={recipe} deleteRecipe={deleteRecipe}/>)}
  </div>
)
}
export default Search;
