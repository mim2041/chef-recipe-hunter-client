import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

const Details = () => {
    const {id} = useParams();
    const recipes = useLoaderData();
    console.log(recipes)

    return (
        <div>
            <h2>Details are here: {recipes.id}</h2>
            {
                recipes.map(recipe => <RecipeDetails
                key={recipe.id}
                recipe={recipe}
                ></RecipeDetails>)
            }
        </div>
    );
};

export default Details;