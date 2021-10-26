
import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Favorites from "./Favorites";
import NavBar from "./NavBar";

function App() {
  const [randomRecipe, setRandomRecipe] = useState(false)
  const [faveMeals, setFaveMeals] = useState([])
  const [showVideo, setShowVideo] = useState(false)
  const [showRecipe, setShowRecipe] = useState(false)
  // const [savedRecipe, setSavedRecipe] = useState([])
  
  const trial = randomRecipe ? randomRecipe["meals"][0] : null

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

  console.log(faveMeals)

  function handleAddToFavorite(){
    const newMeal = {
      "idMeal": trial.idMeal,
      "strMeal": trial.strMeal,
      "strCategory": trial.strCategory,
      "strInstructions": trial.strInstructions,
      "strMealThumb": trial.strMealThumb,
      "strYoutube": trial.strYoutube
  }
  
    fetch("http://localhost:8000/meals", {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(newMeal)
    })
    .then((resp)=>resp.json())
    .then((newMeal)=>setFaveMeals([...faveMeals, newMeal]))
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



  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/favorites">
          <Favorites handleDelete={handleDelete} faveMeals={faveMeals} />
        </Route>
        <Route exact path="/">
          <Home showRecipe={showRecipe} showVideo={showVideo} handleAddToFavorite={handleAddToFavorite} handleShowRecipe={handleShowRecipe} handleVideoClick={handleVideoClick} trial={trial}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
