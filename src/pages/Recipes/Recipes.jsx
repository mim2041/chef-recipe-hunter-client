import React, { useEffect, useState } from 'react';
import Recipe from '../Home/Home/Recipe/Recipe';
import './Recipes.css'

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/allRecipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
        .catch(error => console.error(error))
    })
    
    return (
        <div>
            <h2 className='text-4xl font-bold text-violet-800 my-10'>Here is our chef section</h2>
            <div className="recipes">
                {
                    recipes.map(recipe => <Recipe
                    key={recipe.id}
                    recipe={recipe}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;