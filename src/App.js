import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_KEY = 'XXXXXXXXXXXXXXXXXXX';
  // const QUERY = 'tomato,basil';

  const [recipes, setRecipes] = useState([]);     //recipes gives data from api
  const [search, setSearch] = useState(""); 
  const [QUERY, setQuery] = useState('tomato,cheese');

  useEffect(() =>{
    getRecipes();
  }, [QUERY]);    //leave ,[] empty if only want to run effect once, add counter to run more

 const getRecipes = async () => {
   const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${QUERY}`
   + `&sort=popularity`
   + `&sortDirection=desc`
   + `&number=10` 
   + `&addRecipeInformation=true` 
   + `&ignorePantry=true` 
   + `&apiKey=${APP_KEY}`
   ); 
    const data = await response.json();
    setRecipes(data.results);
    console.log(data.results);
  }
  //`https://api.spoonacular.com/recipes/complexSearch?&includeIngredients=${QUERY}sort=popularity&apiKey=${APP_KEY}
  //` https://api.spoonacular.com/recipes/findByIngredients?&ingredients=${QUERY}&ignorePantry=true&apiKey=${APP_KEY}`
  
  const updateSearch = e => {
    setSearch(e.target.value);      //this is the value of the input
    // console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();   
    setQuery(search);
    setSearch('');      //sets search back to blank state
  }

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
            // myIngredients={recipe.usedIngredients} 
            // extraIngredients={recipe.unusedIngredients}
          />
          ))}
      </div>
    </div>
  );
};

export default App;
