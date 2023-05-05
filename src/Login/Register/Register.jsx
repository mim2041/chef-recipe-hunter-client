import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import account from "../../assets/images/account.png";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import app from '../../firebase/firebase.config';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const auth = getAuth(app)

const Register = () => {

    const {user, createUser,updateUserProfile} = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location.state?.from?.pathname || '/';
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const name = form.name.value;
        // console.log(photoURL, password, name);


        
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
            handleUpdateUserProfile(name, photoURL);
            setSuccess("User has been created successfully");
            navigate('/')
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
        })
    }

    const handleUpdateUserProfile = (name,photoURL) => {
        const profile = {
          displayName: name,
          photoURL: photoURL
        }
        updateUserProfile(profile)
          .then(() => {
            
          })
          .catch((error) => console.error(error));
      };
    return (
        <div className='login mt-10 mx-4 lg:mx-12'>
            <img className='w-full hidden lg:block' src={account} alt="" />
           <div className='pb-10 card flex-shrink-0 shadow-2xl bg-base-100'>
           <form onSubmit={handleRegister} className=' px-10 py-5 w-full'>
                
                <h1 className='text-4xl text-center  mb-8 mt-10'>Create An Account</h1>
                <input className='border-2 w-full mb-5 py-2 rounded-lg pl-2' type="text" name="name" placeholder='Your Name' id="name" required/>
                <input className='border-2 w-full mb-5 py-2 rounded-lg pl-2' type="email" name="email" placeholder='Your Email' id="email" />
                <input className='border-2 w-full mb-5 py-2 rounded-lg pl-2' type="text" name="photoURL" placeholder='Your photoURL' id="photoURL" />
                
                <input className='border-2 w-full py-2 rounded-lg pl-2' type="password" name="password" placeholder='Your Password' id="password" />

                <div className='checkbox mt-2'>
                    <input type="checkbox" className=' text-white'/>
                    <p className=' text-black'>Terms and Conditions</p>
                </div>
                <button type="submit" className='bg-violet-600 text-white w-full py-2 mb-4 mt-2 text-lg rounded-lg'>Create an Account</button>
                    <p className='text-center'>Already have an account? <Link to="/login" className='text-amber-500 underline'>
                    Login
                </Link></p>
                <div className='or flex justify-center items-center'>
                    <hr className='w-1/4'/>
                    <p className='text-lg text-black mx-2'>Or</p>
                    <hr className='w-1/4'/>
                </div>
                
            <p className='text-danger'>{error}</p>
            <p>{success}</p>
            </form>
            <div className='loginWith'>
                    <button className='bg-blue-500 px-10 py-8 rounded-lg text-white text-lg'> Continue with Google</button>
                    <button className='bg-green-500 px-10 py-8 rounded-lg text-white text-lg'> Continue with Github</button>
                </div>
           </div>
        </div>
    );
};

export default Register;