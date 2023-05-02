import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
        </div>
    );
};

export default Header;