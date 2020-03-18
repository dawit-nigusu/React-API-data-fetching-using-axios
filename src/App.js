import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Recipe from "./components/Recipe";
import Axios from "axios";

function App() {
  const APP_ID = "f69b2cf0";
  const APP_KEY = "a392e9db3ae3d16294302ee864f4900e";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState();
  const [newSearch, setNewSearch] = useState("chicken");

  const getRecipes = () => {
    Axios.get(
      `https://api.edamam.com/search?q=${newSearch}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then(res => {
        setRecipes(res.data.hits);
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

 const updateNewSearch = (e) =>{
    e.preventDefault()
    setNewSearch(search)
    console.log(newSearch)
  }

  useEffect(() => {
    getRecipes();
    console.log(newSearch)
  }, [newSearch]);

  return (
    <div className="App">
      <form>
        <input type = "text" value = {search} onChange = {e => setSearch(e.target.value)} />
        <button type = "submit" onClick ={updateNewSearch}>Fetch</button>
      </form>
      <ul>
        {recipes.map(recipe => (
          <Recipe
            key = {recipe.recipe.label}
            image={recipe.recipe.image}
            title={recipe.recipe.label}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
