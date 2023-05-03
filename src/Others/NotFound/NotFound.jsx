import React from 'react';
import ActiveLink from '../../routes/ActiveLink/ActiveLink';
import notFound from '../../assets/images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <div className='mt-10 text-2xl font-bold text-sky-500 p-2 text-center'>
                <ActiveLink to='/'>Go Back Home</ActiveLink>
            </div>            
            <div className="img-container">
                <img src={notFound} width="75%" className='mx-auto' alt="" />
            </div>
        </div>
    );
};

export default NotFound;