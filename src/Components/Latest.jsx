import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Latest = () => {
    return (
        <div className='my-7 flex gap-4 bg-base-200 p-3'>
            <p className='bg-red-500 px-4 py-2 font-medium text-white'>Latest</p>
            <Marquee pauseOnHover={true} className='space-x-10'>
                <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Link>
            </Marquee>
        </div>
    );
};

export default Latest;