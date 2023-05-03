import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FoodDetails from '../../../Details/Details';
import { ToastContext } from 'flowbite-react/lib/esm/components/Toast/ToastContext';
// import { FaBeer, BsFillSuitHeartFill } from 'react-icons/fa';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "tailwindcss/tailwind.css";

const Recipe = ({recipe}) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(true);
        toast.success("The recipe is your favorite!!!");
    }

    const {chef_picture, chef_name, no_of_recipes, year_of_experience, likes} = recipe;
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <div className="w-100 ">
            <img src={chef_picture} alt="Shoes" className=" h-48 w-96" />
        </div>
        <div className="px-5 pb-5">
            <Link to='/' className="my-2 flex items-center justify-between">
            <h5  className="text-xl font-semibold tracking-tight text-blue-700 text-center dark:text-white">
                {chef_name}
            </h5>
            
            </Link>
        

            <div className="flex items-center mt-2.5 mb-5 justify-start">
                <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                </div>
                <div className="">
                <span className="text-[green] font-bold">{year_of_experience} years of year_of_experience</span>
                </div>
            </div>

        <div className="flex items-center mt-2.5 mb-5 justify-start">
            <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>

            </div>
            <div className="">
            <span className="text-[green] font-bold">{no_of_recipes} recipes</span>
            </div>
            </div>
            <div className="flex items-center mt-2.5 mb-5 justify-start">
            <div>
            {/* <ToastContainer position="top-right" /> */}
            <button className={`liked ? text-red-500 : text-green-500`} onClick={handleLike} disabled={liked}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
            </svg>
            </button>


            </div>
            <div className="">
            <span className="text-[green] font-bold">{likes} likes</span>
            </div>
            </div>
            
            <div className="card-actions justify-end">
            <Link to={`/recipes/${recipe.id}`}><button className="btn btn-primary">View Details</button></Link>
            </div>
        </div>
    </div>
    );
};

export default Recipe;