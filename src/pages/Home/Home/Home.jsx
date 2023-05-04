import React from 'react';
import Recipes from '../../Recipes/Recipes';
import FAQ from './FAQ/FAQ';
import Banner from './Banner/Banner';
import { Footer } from 'flowbite-react';
import Contact from './Contact/Contact';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Recipes></Recipes>
            <FAQ></FAQ>
            <Contact></Contact>
        </div>
    );
};

export default Home;