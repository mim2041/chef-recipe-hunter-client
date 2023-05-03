import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from './FoodCard';

const FoodsContainer = () => {
    const categoryFoods = useLoaderData()

    const foods = categoryFoods[0].foods;
    
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
           
            {
                foods?.map(food=><FoodCard food={food}></FoodCard>)
            }
        </div>
    );
};

export default FoodsContainer;