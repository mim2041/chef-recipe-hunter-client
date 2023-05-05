import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({food}) => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <div className="w-100 ">
            <img src={food.food_picture} alt="" className="h-48 w-96  transition ease-in-out delay-150 hover:-translate-y-1 translate-x-1 hover:scale-110 duration-300"/>
        </div>
        <div className="px-5 pb-5">
            <Link to='/' className="my-2 flex items-center justify-between">
            <h5  className="text-xl font-semibold tracking-tight text-blue-700 text-center dark:text-white">
                {food.food_name}
            </h5>            
            </Link>
        
            <div className="card-actions justify-end">
            <Link to=''><button className="btn btn-primary  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300">View Details</button></Link>
            </div>
        </div>
    </div>
    );
};

export default FoodCard;