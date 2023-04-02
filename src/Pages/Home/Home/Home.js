import React from 'react';
import img from '../../../assets/Food-Websites-Image.webp'

const Home = () => {
    return (
        <div style={{ background: `url(${img})` }} className='text-center rounded mt-10 w-[100%] h-[100vh]'>
            <div className=''>
                <h1 className='font-bold text-2x lg:text-5xl   text-[#0FCFEC]'>Wellcome to Mr. Foode</h1>
            </div>
        </div>
    );
};

export default Home;