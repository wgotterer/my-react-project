// src/components/Home.js
import React, {useState}  from "react";
import ReactPlayer from "react-player"

function Home({handleClickForNewPic, handleAddToFavorite, handleShowRecipe, handleVideoClick, individualRecipe, showVideo, showRecipe }) {

  const [showIngredients, setShowIngredients] = useState(false)

  function handleShowIngredients(){
    setShowIngredients(!showIngredients)
  }

  console.log(individualRecipe)
 
  const listOfIngredients = []

  for(let i=1; i<=20; i++){
    if(individualRecipe[`strIngredient${i}`] === "" || individualRecipe[`strIngredient${i}`] === null){
      break
    } listOfIngredients.push(<li>{individualRecipe[`strIngredient${i}`]}</li>)
  }

  if (individualRecipe){
    return(
      <>
      <h2>{individualRecipe.strMeal}</h2> 
      {showVideo ? <ReactPlayer  url={individualRecipe.strYoutube}/> : <img onClick={handleVideoClick} height="300" width="300" src={individualRecipe.strMealThumb} alt={individualRecipe.strMeal}/>  }
      {showVideo ? null : <h3>Like what you see? Click the picture for a recipe video.</h3> }
      {showVideo ? <button onClick={handleVideoClick}>Hide Video</button>: null}
       {<h4 onClick={handleShowRecipe}>{showRecipe? "Hide Instructions!":"Click for Instructions!"}</h4>}
      {showRecipe ? <p>{individualRecipe.strInstructions}</p> : null}
      
    {<h4 onClick={handleShowIngredients}> {showIngredients ? "Hide Ingredients!" : "Click for Ingredients!" }</h4>}
   {showIngredients ?
   <ol>{listOfIngredients}</ol>
  //  <p>{individualRecipe.strMeasure1}-{individualRecipe.strIngredient1}, {individualRecipe.strMeasure2}-{individualRecipe.strIngredient2}, 
  //   {individualRecipe.strMeasure3}-{individualRecipe.strIngredient3}, {individualRecipe.strMeasure4}-{individualRecipe.strIngredient4}, 
  //   {individualRecipe.strMeasure5}-{individualRecipe.strIngredient5}, {individualRecipe.strMeasure6}-{individualRecipe.strIngredient6}, 
  //   {individualRecipe.strMeasure7}-{individualRecipe.strIngredient7}, {individualRecipe.strMeasure8}-{individualRecipe.strIngredient8}, 
  //   {individualRecipe.strMeasure9}-{individualRecipe.strIngredient9}, {individualRecipe.strMeasure10}-{individualRecipe.strIngredient10}, 
  //   {individualRecipe.strMeasure11}-{individualRecipe.strIngredient11}, </p>
    : null }


      <span>
        <button onClick={handleAddToFavorite}>Add to favorites</button>
      </span>
      <span>
        <button onClick={handleClickForNewPic}>Gimme another recipe</button>
      </span>
      </>
    )
  }else {
    return <h3>Loading...</h3>
  }
  
}

export default Home;