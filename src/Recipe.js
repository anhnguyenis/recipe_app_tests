import React from 'react';
import style from './recipe.module.css';

const Recipe = ({
    title, 
    image, 
    time, 
    cuisine, 
    servings, 
    wines, 
    ingredients, 
    instructions, 
    myIngredients, 
    extraIngredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                Make this with:
                {/* {instructions[0].map(steps => steps.map(instruction) => 
                <li key={instruction}>{instruction}</li>
                )} */}
                {/* {myIngredients.map(ingredient =>
                   <li key={ingredient.name}>{ingredient.name}</li> 
                )}
                {extraIngredients.map(ingredient =>
                   <li key={ingredient.name}>{ingredient.name}</li> 
                )} */}
            </ol>
            <img className={style.image} src={image} alt=""/>
            <ol>Ready in {time} minutes.</ol>
            <ol>Serves up to {servings}</ol>
            <ul>{instructions.map(instruction =>
                    <li key={instruction.step}>{instruction.step}</li>
                )}
            </ul>
            <ul>Suggested wine pairings: {wines.map((wine,index) =>
                    <li key={index}>{wine}</li>
                )}
            </ul>
            <ul>Cuisine type:{cuisine.map((cuisine,index) =>
                    <li key={index}>{cuisine}</li>
                )}
            </ul>
        </div>
    );
}

export default Recipe;