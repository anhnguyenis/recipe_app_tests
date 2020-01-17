import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const API_KEY = 'c19c8da953974bc0a7448c65be87331f';

  const [recipes, setRecipes] = useState([]);     //recipes gives data from api
  const [search, setSearch] = useState(""); 
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);    //leave ,[] empty if only want to run effect once, add counter to run more

 const getRecipes = async () => {
   const response = await fetch(
     `https://api.spoonacular.com/recipes/complexSearch?query=${query}` +
     `&sort=popularity` + 
     `&sortDirection=desc` +
     `&number=10` +
     `&addRecipeInformation=true` +
     `&ignorePantry=true` +
     `&instructionsRequired=true` +
     '&fillIngredients=true' +
     `&apiKey=${API_KEY}`
   ); 
    const data = await response.json();
    setRecipes(data.results);
    console.log(data.results);
  }

  const updateSearch = e => {
    setSearch(e.target.value);      //this is the value of the input
    // console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();   
    setQuery(search);
    setSearch('');      //sets search back to blank state
  };

  return(
    <div className="App">
      <div className="heading">
        <h1>Recipe Generator</h1>
        </div>
      <form onSubmit={getSearch} className="search-form">
      Enter ingredients:&nbsp;
        <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch} 
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form> 

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.title} 
            title={recipe.title} 
            image={recipe.image} 
            time={recipe.readyInMinutes}
            cuisine={recipe.cuisines}
            servings={recipe.servings}
            instructions={recipe["analyzedInstructions"]["0"]["steps"]}
            wines={recipe["winePairing"]["pairingText"]}
            wineList={recipe["winePairing"]["pairedWines"]}
            ingredients={recipe["missedIngredients"]}
            steps={recipe["analyzedInstructions"]["0"]["steps"]}
            sourceUrl={recipe.sourceUrl}
            sourceName={recipe.sourceName}
            diets={recipe.diets}
            
          />
          ))}
          
      </div>
    </div>
  );
};

export default App;
