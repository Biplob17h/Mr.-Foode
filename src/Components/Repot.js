import React from 'react';
import { Link } from 'react-router-dom';

const Repot = () => {
    return (
        <div className='text-center m-20'>
            <h1 className='text-5xl font-bold ctext1'>Please Repot Your Problem</h1>

            <form className='mt-20 bg-slate-200 rounded p-20 mb-20'>
                <div className='flex flex-col mx-60'>
                    <input type="text" placeholder="Your Problem" className="input input-bordered w-full " required/>
                    <textarea className="textarea textarea-bordered h-[200px] mt-5" placeholder="Problem details" required></textarea>
                    <Link to='/'><button className='btn btn-ghost cbtn1 mt-2 ' type="submit">Submit</button></Link>
                </div>
            </form>
            <h1 className=' text-2xl font-bold'>Sorry for your trouble</h1>
            <h1 className='text-xl font-semibold'>We make sure this will solve soon!</h1>
        </div>
    );
};

export default Repot;