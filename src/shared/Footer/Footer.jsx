import React from 'react';
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from 'react-icons/fa';
import { FaSkype } from 'react-icons/fa';
import './footer.css'

const Footer = () => {
    return (
        <div className='footer bg-violet-700 p-10 text-white mt-8'>
            <div>
                <button className='bg-violet-500 text-white p-3 rounded-lg'><h2 className='text-3xl '>Bengali Cuisine</h2></button>
            </div>
            <div>
                <p className='text-2xl'>Designed By <button  className='bg-violet-500 text-white p-3 rounded-lg'><span>Mim Khatun</span></button></p>
            </div>
            <div>
                <p><small>&copy; Bengali Cuisine, 2023. All rights reserved.</small></p>
                <div className='icons'>
                    <AiFillFacebook></AiFillFacebook>
                    <FaInstagram></FaInstagram>
                    <FaSkype></FaSkype>
                </div>
            </div>
            
            
        </div>
    );
};

export default Footer;