// src/components/Home.js
import React, {useState} from "react";
import ReactPlayer from "react-player"

function Home({randomRecipe}) {

  const [showVideo, setShowVideo] = useState(false)
  const [showRecipe, setShowRecipe] = useState(false)
  
   const trial = randomRecipe ? randomRecipe["meals"][0] : null
  console.log(trial)

  function handleVideoClick(){
    setShowVideo(!showVideo)
  }

  function handleShowRecipe(){
    setShowRecipe(!showRecipe)
  }

  if (trial){
    return(
      <>
      <h1>SPICE IT UP!</h1>
      <h2>Helping You Put The Spice Into Your Meal Planning!</h2>
      <h2>{trial.strMeal}</h2> 
      {showVideo ? <ReactPlayer  url={trial.strYoutube}/> : <img onClick={handleVideoClick} height="300" width="300" src={trial.strMealThumb}/>  }
      <h3>Like what you see? Click the picture for a recipe video.</h3>
      <button onClick={handleShowRecipe}>Click for Recipe!</button>
      {showRecipe ? <p>{trial.strInstructions}</p> : null}
      <span>
        <button>Add to favorites</button>
      </span>
      </>
    )
  }else {
    return <h3>Loading...</h3>
  }
  // return (
  //   <>
  // <h1>SPICE IT UP HOMEPAGE!</h1>
  // {trial ? <img onClick={handleVideoClick} height="300" width="300" src={trial.strMealThumb}/> : null}
  // {trial ? <h2>{trial.strMeal}</h2> : null}
  //  </>
  // )
  
}

export default Home;