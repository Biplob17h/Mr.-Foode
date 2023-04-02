import React, { useState } from 'react';
import img from '../../assets/2d8f99a7e3e820202bcd78d686c32f04.gif'
import img2 from '../../assets/eating-yum.gif'
import img3 from '../../assets/dinner-time-food.gif'
import { Link } from 'react-router-dom';
import { HiArrowUturnLeft, HiArrowUturnRight } from 'react-icons/hi2';
import Countdown from 'react-countdown';

const Confirm = () => {
    const [completed, setCompleted] = useState(false)
    const [delivered, setDelivered] = useState(false)
    console.log(delivered)

    const renderer = ({ hours, minutes, seconds, completed }) => {
        console.log(minutes)
        if (!completed && minutes === 0) {
            console.log(minutes)
            setDelivered(true)
        }
        if (!completed) {
            return <span className='text-6xl text-white font-bold'>{minutes}:{seconds}</span>;
        }
        if (completed) {
            return setCompleted(true);
        }
    };
    return (
        <div className=''>
            <div>
                {
                    completed === false && delivered === false ?
                        <div>
                            <div>
                                <img className='rounded-xl w-[360px] mx-auto mt-10' src={img} alt="" />
                                <h1 className='mt-5 text-3xl text-center font-bold'>Your order place successfully</h1>
                                <div>
                                    <div className={`text-center mt-10  card bg-orange-500  mx-[400px] h-[200px]`}>
                                        <div className=' card-body mt-10'>
                                            <Countdown
                                                date={Date.now() +  70000}
                                                renderer={renderer}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : completed === false && delivered === true
                            ?
                            <div>
                                <div>
                                    <img className='rounded-xl w-[360px] h-[340px] mx-auto mt-10' src={img3} alt="" />
                                    <h1 className='mt-5 text-3xl text-center font-bold'>Your food on it's away</h1>
                                    <div>
                                        <div className={`text-center mt-10  card bg-orange-500  mx-[400px] h-[200px]`}>
                                            <div className=' card-body mt-10'>
                                                <Countdown
                                                    date={Date.now() + 59000}
                                                    renderer={renderer}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='text-center'>
                                <img className='mx-auto rounded-lg w-[300px]' src={img2} alt="" />
                                <h1 className='text-5xl font-bold mt-10 ctext1'> Enjoy Your food !</h1>
                                <h1 className='text-xl mt-5'>Have a trouble with your food? <Link to='/settings/repot'><button className='btn btn-ghost cbtn1'>Repot</button></Link></h1>
                            </div>
                }
            </div>
            <div className='mt-40 mx-96 flex align-middle '>
                <Link to='/'><button className='btn btn-ghost mr-20 cbtn1'><HiArrowUturnLeft className='text-2xl w-20' />Go To Home</button></Link>
                <Link to='/order'><button className='btn btn-ghost  cbtn1'>Buy Some More <HiArrowUturnRight className='text-2xl w-20' /></button></Link>
            </div>
        </div>

    );
};

export default Confirm;



