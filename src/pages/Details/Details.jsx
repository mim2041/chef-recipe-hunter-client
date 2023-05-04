import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import ChefInfo from './ChefInfo';
import RecipeInfo from './RecipeInfo';

const Details = () => {
    const {id} = useParams();
    const chef = useLoaderData();
    console.log(chef)

    return (
        <div >
            <ChefInfo chef={chef}></ChefInfo>
            <p className='text-3xl text-[green] mx-12'>All Recipes</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 p-5 m-5">
                
            {
                chef?.chefs_recipes?.map(recipe=><RecipeInfo recipe={recipe} chef={chef}></RecipeInfo>)
            }
            </div>
            
        </div>
    );
};

export default Details;