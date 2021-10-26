// src/components/Home.js
import React  from "react";
import ReactPlayer from "react-player"

function Home({handleClickForNewPic, handleAddToFavorite, handleShowRecipe, handleVideoClick, individualRecipe, showVideo, showRecipe }) {

  // {for (key in individualRecipe){
  //   console.log(key)
  // }}

  // Object.keys(individualRecipe).map(function(keyName, keyIndex) {
  //   // use keyName to get current key's name
  //   console.log(keyName)
  //   // and a[keyName] to get its value
  // })

  if (individualRecipe){
    return(
      <>
      <h1>SPICE IT UP!</h1>
      <h2>Helping You Put The Spice Into Your Meal Planning!</h2>
      <h2>{individualRecipe.strMeal}</h2> 
      {showVideo ? <ReactPlayer  url={individualRecipe.strYoutube}/> : <img onClick={handleVideoClick} height="300" width="300" src={individualRecipe.strMealThumb} alt={individualRecipe.strMeal}/>  }
      {showVideo ? null : <h3>Like what you see? Click the picture for a recipe video.</h3> }
      {showVideo ? <button onClick={handleVideoClick}>Hide Video</button>: null}
       {<button onClick={handleShowRecipe}>{showRecipe? "Hide Instructions!":"Show Instructions!"}</button>}
      
      {showRecipe ? <p>{individualRecipe.strInstructions}</p> : null}
      <ul>
        {/* Add conditionally rendered ingrediants and have each one have list. Iterate of individualRecipe */}
      </ul>
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