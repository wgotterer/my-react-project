// src/components/Home.js
import React, {useState}  from "react";
import ReactPlayer from "react-player";


function Home({handleClickForNewPic, handleAddToFavorite, handleShowRecipe, handleVideoClick, individualRecipe, showVideo, showRecipe }) {

  const [showIngredients, setShowIngredients] = useState(false)

  function handleShowIngredients(){
    setShowIngredients(!showIngredients)
  }

 
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
   <ol>{listOfIngredients}</ol>: null }
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