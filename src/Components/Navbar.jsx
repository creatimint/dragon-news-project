import React from 'react';
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div></div>
            <div className='flex gap-6 ml-32'>
                <p>Home</p>
                <p>About</p>
                <p>Career</p>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <img src={userIcon}/>
                <button className='btn btn-neutral'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;