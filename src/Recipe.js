import React from 'react';
import style from './recipe.module.css';

const Recipe = ({
    title, 
    image, 
    time, 
    cuisine, 
    servings, 
    wines, 
    wineList,
    ingredients, 
    instructions,
    sourceUrl,
    sourceName,
    diets,
    steps,
}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>

            <div>Ready in {time} minutes.</div>

            <div>Serves up to {servings}.</div>

            <ul>Cuisine: {cuisine.map((cuisine,index) =>
                    <li key={index}>{cuisine}</li>)}
            </ul>

            <img className={style.image} src={image} alt=""/>
            
            <div>
                <h2>Ingredients:</h2>
                <ul>{ingredients.map((ingredient,index) =>
                    <li key={index}>{ingredient.amount.toLocaleString()} {ingredient.unitShort} {ingredient.name}</li>
                    // <li key={index}> {ingredient.original}<img src={ingredient.image} alt=""/></li>
                    )}
                </ul>

                <ul>{ingredients.map((ingredient,index) =>
                    // <li key={index}>{ingredient.amount} {ingredient.unitShort} {ingredient.name}</li>
                    <span key={index}><img src={ingredient.image} alt=""/></span>
                    )}
                </ul>
            </div>

            <div>
                <h2>Recipe:</h2>
                <ol>{instructions.map(instruction =>
                        <li key={instruction.step}>{instruction.step}</li>
                    )}
                </ol>
            </div>

            {/* <ul>{steps.map((step) => (step.ingredients.map((ingredient, index) =>
                    <li key={index}>{ingredient.name}</li>)))}
            </ul> */}

            {/* <ul>Suggested wine pairings: {wineList.map((wine,index) =>
                    <li key={index}>{wine}</li>)}
            </ul> */}
            <div><h3>Wine recommendations:</h3>{wines}</div>

            <ul>{diets.map((diet,index) =>
                    <li key={index}>{diet}</li>)}
            </ul>

            <div>Source: <a href={sourceUrl}>{sourceName}</a></div>
        </div>
    );
}

export default Recipe;