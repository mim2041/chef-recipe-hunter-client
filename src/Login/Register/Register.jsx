import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import account from "../../assets/images/account.png";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import app from '../../firebase/firebase.config';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const auth = getAuth(app)

const Register = () => {

    const {user, createUser} = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(email, password, name);


        // Password strong conditions
        // if(!/(?=.*[A-Z])/.test(password)){
        //     setError('Please add at least one uppercase');
        //     return;
        // }
        // else if(!/(?=.*[0-9].*[0-9])/.test(password)){
        //     setError('please add atleast 2 numbers');
        //     return;
        // }
        // else if(!/(?=.*[!@#$&*])/.test(password)){
        //     setError('Please add a special character');
        //     return;
        // }
        if(email === '' || password === ''){
            setError('Cannot submit empty email and password fields')
            return;
        }

        else if(password.length < 6){
            setError('The password is less than 6 characters')
            return;
        }

        
        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('');
            form.reset();
            setSuccess("User has been created successfully");
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
        })
    }

    return (
        <div className='login mt-10'>
            <img className='w-full' src={account} alt="" />
            <form onSubmit={handleRegister} className='border-2 px-10 py-5 bg-slate-400 w-full'>
                
                <h1 className='text-4xl text-center mb-8 mt-10'>Create An Account</h1>
                <input className='border-2 w-full mb-5 py-2 rounded-lg pl-2' type="text" name="name" placeholder='Your Name' id="name" required/>
                <input className='border-2 w-full mb-5 py-2 rounded-lg pl-2' type="email" name="email" placeholder='Your Email' id="email" />
                
                <input className='border-2 w-full py-2 rounded-lg pl-2' type="password" name="password" placeholder='Your Password' id="password" />\
                <br />

                <div className='checkbox'>
                    <input type="checkbox" className=' text-white'/>
                    <p className=' text-white'>Terms and Conditions</p>
                </div>
                <button type="submit" className='bg-amber-500 w-full py-2 mb-4 mt-2 text-lg rounded-lg'>Create an Account</button>
                    <p className='text-center'>Already have an account? <Link to="/login" className='text-amber-500 underline'>
                    Login
                </Link></p>
                <div className='or'>
                    <hr className='w-1/4'/>
                    <p className='text-lg text-white'>Or</p>
                    <hr className='w-1/4'/>
                </div>
                <div className='loginWith'>
                    <button className='bg-blue-500 px-10 py-8 rounded-lg text-white text-lg'> Continue with Google</button>
                    <button className='bg-green-500 px-10 py-8 rounded-lg text-white text-lg'> Continue with Github</button>
                </div>
            <p className='text-danger'>{error}</p>
            <p>{success}</p>
            </form>
        </div>
    );
};

export default Register;