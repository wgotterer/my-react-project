import React from 'react'

 function RecipeCard({recipe, deleteRecipe}) {

    
   
   
   
    return (
        <div>
            <h2> {recipe.strMeal} </h2>
            <img src={recipe.strMealThumb} width="300px" height="300px" />
            <button onClick={()=>deleteRecipe(recipe)}> delete </button>
            <p> {recipe.strInstructions}</p>
            


        </div>
    )
}
export default RecipeCard