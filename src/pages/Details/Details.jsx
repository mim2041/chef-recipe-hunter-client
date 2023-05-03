import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

const Details = () => {
    const {id} = useParams();
    const recipe = useLoaderData();
    console.log(recipe);
    

    return (
        <div>
            <img src={recipe.food_picture} alt="" />
            <h2>Details are here: {recipe.id}</h2>
            <p>{recipe.food_name}</p>
        </div>
    );
};

export default Details;