import React from 'react';


const Recipe = ({recipe}) => {
    
    const {chef_picture, chef_name, no_of_recipes, year_of_experience, likes} = recipe;
    
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
            <figure><img src={chef_picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{chef_name}</h2>
                <ul>
                    <li>{year_of_experience} years of experience</li>
                    <li>No of recipes {no_of_recipes}</li>
                    <li>{likes} likes</li>
                </ul>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Recipe;