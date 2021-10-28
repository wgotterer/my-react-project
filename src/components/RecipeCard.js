import React, {useState} from 'react'

 function RecipeCard({recipe, deleteRecipe}) {

    const [showIngredients, setShowIngredients] = useState(false)
   
    function handleShowIngredients(){
        setShowIngredients(!showIngredients)
    }
   
   if(recipe){
    return (
        <div className="recipeCard">
            <h2> {recipe.strMeal} </h2>
            <img src={recipe.strMealThumb} width="300px" height="300px" />
            <button onClick={()=>deleteRecipe(recipe)}>🗑️</button>
            {<h4 onClick={handleShowIngredients}>{showIngredients ? "Hide ingredients!" : "Click for ingredients!"}</h4>}
            {showIngredients ? <p> {recipe.strIngredients}</p> : null}
            <p> {recipe.strInstructions}</p>
        </div>
    )} else{
        return <h3>Waiting for a new recipe</h3>
    }
}
export default RecipeCard