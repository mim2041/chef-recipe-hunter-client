import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./FoodItem.css";
import FoodNav from "./FoodNav";


const FoodItem = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-mim2041.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  });
  return (
    <div className="">
      <FoodNav></FoodNav>
      <Outlet></Outlet>
    </div>
  );
};

export default FoodItem;