import React, {useState} from "react";
import ReactPlayer from "react-player"

function FavoriteCards({meal, handleDelete}) {
    

    const [videoDisplay, setVideoDisplay] = useState(false)

    function handleVideoClick(){
        setVideoDisplay(!videoDisplay)

    }

    function hideVideoDisplay(){
        setVideoDisplay(!videoDisplay)
    }

  return (
    <>
    <h1>{meal.strMeal}</h1>
    {videoDisplay ? <ReactPlayer  url={meal.strYoutube}/> : <img onClick={handleVideoClick} height="300" width="300" src={meal.strMealThumb} alt={meal.strMeal}/>  }
    {videoDisplay? <button onClick={hideVideoDisplay}>Hide Video</button> : null}
    <button  onClick={()=>handleDelete(meal)}>Feel the wrath of my click!</button>
    </>

  )
}

export default FavoriteCards;