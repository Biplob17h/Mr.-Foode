import React from 'react';
import { toast } from 'react-hot-toast';
import { AiFillDelete } from 'react-icons/ai';

const Order = ({ order, orders }) => {
    const { img, name, price, country, quantity, _id } = order;
    const handleDelete = () => {
        fetch(`https://mr-foode-server.vercel.app/order/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Delete successfull')
                }
            })
    }
    return (
        <div className='flex mb-10'>
            <img className='w-[250px] h-[200px] rounded-xl' src={img} alt="" />
            <div className='flex flex-col ml-10 align-middle mt-7 text-start'>
                <h1 className='text-2xl font-bold ctext3'>{name}</h1>
                <p className='font-semibold'>Price : {price} $</p>
                <p className='font-semibold'>country : {country}</p>
                <p className='font-semibold flex'>Quantity : {quantity} Items</p>
                <p className='font-semibold flex mt-5 -ml-4'><button onClick={handleDelete} className='flex  btn btn-ghost'>Delete Item <AiFillDelete className='ml-1 text-xl' /></button></p>
            </div>
        </div>
    );
};

export default Order;