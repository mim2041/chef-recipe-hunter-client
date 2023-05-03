import React from 'react';
import Recipes from '../../Recipes/Recipes';
import FAQ from './FAQ/FAQ';
import Banner from './Banner/Banner';
import { Footer } from 'flowbite-react';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Recipes></Recipes>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;