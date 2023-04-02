import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { AuthContext } from '../../../ContextApi/UserContext';
import { Navigate } from 'react-router-dom';

const Food = ({ food }) => {
    const { user } = useContext(AuthContext)
    const [enter, setEnter] = useState(false)
    const [quantity, setQuantity] = useState(1);
    const { name, img, price, dis, country } = food;
    const totalPrice = price * quantity;

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
        else {
            toast.error(`Quantity can't be smaller than one`)
        }
    }
    const handlePlus = () => {
        setQuantity(quantity + 1)
    }
    const handleAddToCurt = () => {
        if (user?.email) {
            setQuantity(1)
            const order = {
                name,
                img,
                price,
                quantity,
                totalPrice,
                country,
                email: user.email,
                isConfirmed: false
            }
            fetch(`https://mr-foode-server.vercel.app/order`, {
                method: `POST`,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Order add to curt');
                    }
                })
        }
        else{
            return <Navigate to='/login'></Navigate>
        }

    }
    return (
        <div onMouseEnter={() => setEnter(true)} onMouseLeave={() => setEnter(false)} className={enter ? `card w-96 bg-base-100 shadow-xl chover` : `card w-96 bg-base-100 shadow-xl`}>
            <figure><img className='h-[200px] rounded' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold -mt-5">{name}</h2>
                <p className='font-semibold -mt-2'>Price : {price}$</p>
                <p className='font-semibold -mt-2'>Country : {country}</p>
                <p className='-mt-2'>{dis}</p>
            </div>
            {
                enter ?
                    <>
                        <div>
                            {/* modal */}
                            <label htmlFor="my-modal" className="btn btn-ghost cbtn1 rounded-md w-full">Order Now</label>
                            <input type="checkbox" id="my-modal" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box">
                                    <img src={img} alt="" />
                                    <h1 className='font-bold text-xl'>{name}</h1>
                                    <p>Price : {price}$</p>
                                    <h1 className='font-bold text-l'>Quantity : <button onClick={handleMinus} className='btn btn-ghost mr-5'><AiOutlineMinus /></button> <span>{quantity}</span><button onClick={handlePlus} className='btn btn-ghost ml-5'><AiOutlinePlus /></button></h1>
                                    <p>Total Price : {totalPrice}$</p>
                                    <div className="modal-action">
                                        <label onClick={handleAddToCurt} htmlFor="my-modal" className="btn">Add to Curt</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                    </>
            }
        </div>


    );
};

export default Food;