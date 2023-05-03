import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FoodItem.css'

const FoodItem = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    })
    return (
        <div>
            <h2 className='text-4xl font-bold text-violet-800 my-10'>You can see many others Bengali Foods here</h2>
            <div>
                <div className='food-item '>
                    <h4>All Category</h4>
                    <div className='categories'>
                    {
                        categories.map(category => <p
                        key={category.id}>
                            <Link to={`/foodItem/${category.category}`}>{category.category}</Link>
                        </p>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;