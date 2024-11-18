import React from 'react';
import Header from '../Components/Header';
import Latest from '../Components/Latest';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/MainSection/LeftAside';
import RightAside from '../Components/MainSection/RightAside';

const HomeLayout = () => {
    return (
        <div className='max-w-6xl mx-auto font-poppins'>
            <header>
                <Header></Header>
                <Latest></Latest>
                
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='grid md:grid-cols-12 gap-6 my-20'>
                <aside className='col-span-3'><LeftAside></LeftAside></aside>
                <section className='col-span-6'>mid side</section>
                <aside className='col-span-3'><RightAside></RightAside></aside>
            </main>
        </div>
    );
};

export default HomeLayout;