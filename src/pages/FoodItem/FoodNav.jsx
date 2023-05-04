import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FoodItem.css";
import ActiveLink from "../../routes/ActiveLink/ActiveLink";

const FoodNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-mim2041.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  });
  return (
    <div className="header">
      <div className="navbar bg-slate-900 text-white  lg:p-3">
        <div className="navbar-end">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 text-white rounded-box w-52">
              
              <li>
                {categories.map((category) => (
                  <p key={category.id}>
                    <Link to={`/foodItem/${category.category}`}>
                      {category.category}
                    </Link>
                  </p>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
               
              
         
              <li>
                {categories.map((category) => (
                  <p key={category.id}>
                    <Link to={`/foodItem/${category.category}`}>
                      {category.category}
                    </Link>
                  </p>
                ))}
              </li>
            </ul>
        </div>
        <div className="navbar-end"><div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div></div>
      </div>
    </div>
  );
};

export default FoodNav;