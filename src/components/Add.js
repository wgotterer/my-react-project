// src/components/About.js
import React from "react";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard"

function Add() {

// const [addRecipe, setAddRecipe] = useState([])
const [allRecipes, setAllRecipes] = useState([])
const [formState, setFormSate] = useState({
     "strMeal": "",
     "strIngredients": "",
     "strInstructions": "",
     "strMealThumb": ""
})

function handleChange(e){
  const name = e.target.name
  let value = e.target.value

  setFormSate({
    ...formState,
    [name]:value
  })
}



function handleSubmit(e){
  e.preventDefault()
  //console.log(e.target.image.value)
let newMeal = {
     "strMeal": e.target.strMeal.value,
     "strIngredients": e.target.strIngredients.value,
     "strInstructions": e.target.strInstructions.value,
     "strMealThumb": e.target.strMealThumb.value,
      }
      fetch(`${process.env.REACT_APP_API_URL}/recipes`, {
        method:'POST',
        headers:  {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newMeal)
      })
      .then(response => response.json())
      .then(data => setAllRecipes([data, ...allRecipes]))
      setFormSate({
        "strMeal": "",
        "strIngredients": "",
        "strInstructions": "",
        "strMealThumb": ""
   })
      
    }


     
     useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/recipes`)
        .then(response => response.json())
        .then(data => setAllRecipes(data))
     }, [])

    
     
     function deleteRecipe(recipe){
      fetch(`${process.env.REACT_APP_API_URL}/recipes/${recipe.id}`, {
        method: "DELETE"
      })
      .then(()=> setAllRecipes(allRecipes.filter((meal)=> meal.id !== recipe.id)))
  }
      

 return (
  <div className="new-recipe-form">
    <h2>New Recipe</h2>
    <form  onSubmit={handleSubmit}>
      <input onChange={handleChange} value={formState.strMeal} type="text" name="strMeal" placeholder="Recipe name" />
      <input onChange={handleChange} value={formState.strMealThumb} type="text" name="strMealThumb" placeholder="Image URL" />
      <input onChange={handleChange} value={formState.strIngredients} type="text" name="strIngredients" placeholder="Ingredients"/>
      <input onChange={handleChange} value={formState.strInstructions} type="text" name="strInstructions"  placeholder="Instructions" />
      <button  type="submit"> Add Recipe</button>
    </form>
  {allRecipes.map((recipe)=> <RecipeCard recipe={recipe} deleteRecipe={deleteRecipe}/>)}
  </div>
)
}
export default Add;
