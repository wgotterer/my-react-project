
import React, {useEffect, useState} from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
import Favorites from "./Favorites";
import NavBar from "./NavBar";

function App() {
  const [randomRecipe, setRandomRecipe] = useState({"meals":[{}]})
  const [faveMeals, setFaveMeals] = useState([])
  const [showVideo, setShowVideo] = useState(false)
  const [showRecipe, setShowRecipe] = useState(false)
  // const [savedRecipe, setSavedRecipe] = useState([])
  
  const history = useHistory()
  console.log(history)

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((resp)=>resp.json())
    .then((recipe)=> setRandomRecipe(recipe))
  }, [])


  useEffect(() => {
    fetch("http://localhost:8000/meals")
    .then((resp)=>resp.json())
    .then((savedFaves)=>setFaveMeals(savedFaves))
  }, [])

  

  function handleAddToFavorite(){
    const individualRecipe = randomRecipe["meals"][0]
    const newMeal = {
      "idMeal": individualRecipe.idMeal,
      "strMeal": individualRecipe.strMeal,
      "strCategory": individualRecipe.strCategory,
      "strInstructions": individualRecipe.strInstructions,
      "strMealThumb": individualRecipe.strMealThumb,
      "strYoutube": individualRecipe.strYoutube,
      "strIngredient1": individualRecipe.strIngredient1,
      "strIngredient2": individualRecipe.strIngredient2,
      "strIngredient3": individualRecipe.strIngredient3,
      "strIngredient4": individualRecipe.strIngredient4,
      "strIngredient5": individualRecipe.strIngredient5,
      "strIngredient6": individualRecipe.strIngredient6,
      "strIngredient7": individualRecipe.strIngredient7,
      "strIngredient8": individualRecipe.strIngredient8,
      "strIngredient9": individualRecipe.strIngredient9,
      "strIngredient10": individualRecipe.strIngredient10,
      "strIngredient11": individualRecipe.strIngredient11,
      "strIngredient12": individualRecipe.strIngredient12,
      "strIngredient13": individualRecipe.strIngredient13,
      "strIngredient14": individualRecipe.strIngredient14,
      "strIngredient15": individualRecipe.strIngredient15,
      "strMeasure1": individualRecipe.strMeasure1,
      "strMeasure2": individualRecipe.strMeasure2,
      "strMeasure3": individualRecipe.strMeasure3,
      "strMeasure4": individualRecipe.strMeasure4,
      "strMeasure5": individualRecipe.strMeasure5,
      "strMeasure6": individualRecipe.strMeasure6,
      "strMeasure7": individualRecipe.strMeasure7,
      "strMeasure8": individualRecipe.strMeasure8,
      "strMeasure9": individualRecipe.strMeasure9,
      "strMeasure10": individualRecipe.strMeasure10,
      "strMeasure11": individualRecipe.strMeasure11,
      "strMeasure12": individualRecipe.strMeasure12,
  }
  
    fetch("http://localhost:8000/meals", {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(newMeal)
    })
    .then((resp)=>resp.json())
    .then((newMeal)=>setFaveMeals([newMeal, ...faveMeals]))
    history.push(`/favorites`)
  }

  function handleDelete(meal){
    fetch(`http://localhost:8000/meals/${meal.id}`, {
        method: "DELETE"
    })
    .then(()=>setFaveMeals(faveMeals.filter((oneMeal)=>oneMeal.id !== meal.id)))

}
  
  function handleVideoClick(){
    setShowVideo(!showVideo)
  }

  function handleShowRecipe(){
    setShowRecipe(!showRecipe)
  }

  function handleClickForNewPic(){
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((resp)=>resp.json())
    .then((recipe)=> setRandomRecipe(recipe))
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/add">
          <Add />
        </Route>
        <Route exact path="/favorites">
          <Favorites showVideo={showVideo} handleDelete={handleDelete} faveMeals={faveMeals} />
        </Route>
        <Route exact path="/">
          <Home handleClickForNewPic={handleClickForNewPic} showRecipe={showRecipe} showVideo={showVideo} handleAddToFavorite={handleAddToFavorite} handleShowRecipe={handleShowRecipe} handleVideoClick={handleVideoClick} individualRecipe={randomRecipe["meals"][0]}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
