import React from 'react'

 function RecipeCard({recipe, deleteRecipe}) {

    
   
   
   if(recipe){
    return (
        <div>
            <h2> {recipe.strMeal} </h2>
            <img src={recipe.strMealThumb} width="300px" height="300px" />
            <button onClick={()=>deleteRecipe(recipe)}> delete </button>
            <p> {recipe.strInstructions}</p>
        </div>
    )} else{
        return <h3>Waiting for a new recipe</h3>
    }
}
export default RecipeCard