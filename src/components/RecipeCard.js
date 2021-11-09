import React, {useState} from 'react'

 function RecipeCard({recipe, deleteRecipe}) {

    const [showIngredients, setShowIngredients] = useState(false)
    const [showAllInstructions, setShowAllInstrctions] = useState(false)
   
    function handleShowInstructions(){
        setShowAllInstrctions(!showAllInstructions)
    }

    function handleShowIngredients(){
        setShowIngredients(!showIngredients)
    }
   
   if(recipe){
    return (
        <div className="recipeCard">
            <h2> {recipe.strMeal} </h2>
            <img src={recipe.strMealThumb} width="300px" height="300px" alt={recipe.strMeal}/>
            <button onClick={()=>deleteRecipe(recipe)}>🗑️</button>
            {<h4 className="new-recipe-click" onClick={handleShowIngredients}>{showIngredients ? "Hide ingredients!" : "Click for ingredients!"}</h4>}
            {showIngredients ? <p> {recipe.strIngredients}</p> : null}
            {<h4 className="new-recipe-click" onClick={handleShowInstructions}>{showAllInstructions? "Hide instructions!" : "Click for instructions!"}</h4>}
            {showAllInstructions ? <p> {recipe.strInstructions}</p> : null}
        </div>
    )} else{
        return <h3>Waiting for a new recipe</h3>
    }
}
export default RecipeCard