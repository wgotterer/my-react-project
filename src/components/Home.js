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
    if((individualRecipe[`strIngredient${i}`] ===  "" && individualRecipe[`strMeasure${i}`] ===  "") || 
      (individualRecipe[`strIngredient${i}`] === null && individualRecipe[`strMeasure${i}`] === null)){
      break
    }listOfIngredients.push(<li>{individualRecipe[`strMeasure${i}`]} {individualRecipe[`strIngredient${i}`]}</li>)
  }

  if (individualRecipe){
    return(
      <div className="home">
      <h2 className="name" >{individualRecipe.strMeal}</h2> 
      {showVideo ? <ReactPlayer className="home-video" url={individualRecipe.strYoutube}/> : <img className="image" onClick={handleVideoClick} height="300" width="300" src={individualRecipe.strMealThumb} alt={individualRecipe.strMeal}/>  }
      {showVideo ? null : <h3>Like what you see? Click the picture for a recipe video.</h3> }
      {showVideo ? <button onClick={handleVideoClick}>Hide Video</button>: null}
      {<h4 className="ingredient" onClick={handleShowIngredients}> {showIngredients ? "Hide Ingredients!" : "Click for Ingredients!" }</h4>}
      {showIngredients ? <ul className="home-list">{listOfIngredients}</ul>: null }
       {<h4  className="instruction" onClick={handleShowRecipe}>{showRecipe? "Hide Instructions!":"Click for Instructions!"}</h4>}
      {showRecipe ? <p>{individualRecipe.strInstructions}</p> : null}
      <span>
        <button onClick={handleAddToFavorite}>Add to favorites</button>
      </span>
      <span>
        <button onClick={handleClickForNewPic}>Gimme another recipe</button>
      </span>
      </div>
    )
  }else {
    return <h3>Loading...</h3>
  }
  
}

export default Home;