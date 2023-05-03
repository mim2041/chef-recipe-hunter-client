import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import './Header.css';
import ActiveLink from '../../routes/ActiveLink/ActiveLink';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.error(error))
    }

    return (
        <div className='header'>
           <div className="navbar bg-base-200 p-5">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <ActiveLink to="/"><button className=' m-2'>Home</button></ActiveLink>
                <ActiveLink to="/blog"><button className=' m-2'>Blog</button></ActiveLink>
                <ActiveLink to="/foodItem"><button className=' m-2'>Food Item</button></ActiveLink>
                </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Bengali Cuisine</Link>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <ActiveLink to="/"><button className=' m-2'>Home</button></ActiveLink>
                <ActiveLink to="/blog"><button className=' m-2'>Blog</button></ActiveLink>
                <ActiveLink to="/fooditem"><button className=' m-2'>Food Item</button></ActiveLink>
                
                </ul>
            </div>
            <div className="navbar-end">
            
            {
                user ? <><img title={user.displayName} className='userImg' src={user.photoURL} alt="" />
                <button  className='btn btn-primary' onClick={handleLogOut}>LogOut</button></> : <ActiveLink to="/login"><button className='btn btn-primary'>Login</button></ActiveLink>
            }
            </div>
            </div>
        </div>
    );
};

export default Header;