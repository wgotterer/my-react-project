import React, {useState} from "react";
import ReactPlayer from "react-player"

function FavoriteCards({meal, handleDelete}) {
    

    const [videoDisplay, setVideoDisplay] = useState(false)
    const [instructionDisplay, setInstructionDisplay] = useState(false)
    const [ingredientsDisplay, setIngredientsDisplay] = useState(false)

    function handleVideoClick(){
        setVideoDisplay(!videoDisplay)

    }

    function hideVideoDisplay(){
        setVideoDisplay(!videoDisplay)
    }

    function handleInstructions(){
        setInstructionDisplay(!instructionDisplay)
    }
    function handleIngredients(){
        setIngredientsDisplay(!ingredientsDisplay)
    }

  return (
    <>
    <h1>{meal.strMeal}</h1>
    {videoDisplay ? <ReactPlayer  url={meal.strYoutube}/> : <img onClick={handleVideoClick} height="300" width="300" src={meal.strMealThumb} alt={meal.strMeal}/>  }
    {videoDisplay ? null : <h3>Click picture to see the recipe video!</h3>}
    {videoDisplay? <span><button onClick={hideVideoDisplay}>Hide Video</button></span> : null}
    <button  onClick={()=>handleDelete(meal)}>Feel the wrath of my click!</button>
    <h4 onClick={handleInstructions}>Click for Instructions!</h4> 
    {instructionDisplay ? <p>{meal.strInstructions}</p> : null}
    <h4 onClick={handleIngredients}>Click for Ingredients!</h4>
   {ingredientsDisplay ?
   <p>{meal.strMeasure1}-{meal.strIngredient1}, {meal.strMeasure2}-{meal.strIngredient2}, 
    {meal.strMeasure3}-{meal.strIngredient3}, {meal.strMeasure4}-{meal.strIngredient4}, 
    {meal.strMeasure5}-{meal.strIngredient5}, {meal.strMeasure6}-{meal.strIngredient6}, 
    {meal.strMeasure7}-{meal.strIngredient7}, {meal.strMeasure8}-{meal.strIngredient8}, 
    {meal.strMeasure9}-{meal.strIngredient9}, {meal.strMeasure10}-{meal.strIngredient10}, 
    {meal.strMeasure11}-{meal.strIngredient11}, </p>
    : null }
    </>

  )
}

export default FavoriteCards;