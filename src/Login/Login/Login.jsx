import React, { useContext, useState } from 'react';
import login from '../../assets/images/login.jpg';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';



const auth = getAuth(app);

const Login = () => {
    const { signIn, popupSignIn} = useContext(AuthContext);

    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('User login successful');
            setError('');
            navigate(from, { replace: true });
        })
        .catch(error => {
            setError(error.message)
        })

    }

    const handleGoogleSignIn = () => {
        popupSignIn( googleProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGithubSignIn = () => {
        popupSignIn( githubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className=''>
           <h1 className="text-5xl font-bold text-center -mb-5 mt-10">Login now!</h1>
            <div className="hero min-h-screen">
            <div className="hero-content grid lg:grid-cols-2">
            <img className='w-full hidden lg:block' src={login} alt="" />
            <div className="">
            
            <div className="card flex-shrink-0  shadow-2xl bg-base-100">
                
            <form className="card-body " onSubmit={handleLogin}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                    
                </label>
                <input type={show ? "text" : "password"} name='password' placeholder="password" className="password input input-bordered" required/>
                <div className='check-pass justify-between text-white mb-5'>
                    <p onClick={() => setShow(!show)}><small className='password-toggle text-black'>
                        {
                            show ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                          </svg>
                           : 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                        }
                        </small></p>
                        <br />
                        <div className='flex justify-between items-center'>
                        <div className='checkbox'>
                            <input type="checkbox" className=' text-white'/>
                            <p className=' text-black'>Terms and Conditions</p>
                        </div>
                        <Link className='text-amber-500 mt-3 underline'>Forgotten Password</Link>
                        </div>
                </div>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
                <p className='text-center'>Do not have an account? <Link to="/register" className='text-amber-500 underline'>
                    Create An Account
                </Link></p>
                <div className='or'>
                    <hr className='w-1/4'/>
                    <p className='text-lg'>Or</p>
                    <hr className='w-1/4'/>
                </div>
                
                <p className='text-success'>{success}</p>
                <p className='text-[red]'>{error}</p>
            </form>
            <div className='loginWith'>
                    <button  onClick={handleGoogleSignIn} className='bg-blue-500 px-10 py-8 rounded-lg text-white text-lg'> Continue with Google</button>
                    <button onClick={handleGithubSignIn} className='bg-green-500 px-10 py-8 rounded-lg text-white text-lg'> Continue with Github</button>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Login;