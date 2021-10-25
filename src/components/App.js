

import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Favorites from "./Favorites";
import NavBar from "./NavBar";

function App() {
  const [randomRecipe, setRandomRecipe] = useState(false)

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((resp)=>resp.json())
    .then((recipe)=> setRandomRecipe(recipe))
  }, [])
  


  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/">
          <Home randomRecipe={randomRecipe}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
