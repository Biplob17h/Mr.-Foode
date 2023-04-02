import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import countTotalPrice from '../../Components/CountsTotalPrice';
import { AuthContext } from '../../ContextApi/UserContext';
import Order from './Order';
import { HiArrowUturnLeft } from 'react-icons/hi2';
import { HiArrowUturnRight } from 'react-icons/hi2';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';




const Cart = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://mr-foode-server.vercel.app/order?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email, orders])
    const totalPrice = countTotalPrice(orders)
    const tax = parseInt(totalPrice) * 0.1
    const totalTax = parseFloat(tax).toFixed(2)
    const deliveryCharge = orders.length * 2;
    const grandTotal = parseInt(totalPrice) + parseFloat(totalTax)

    const handleDeleteAll = () => {
        const confarm = window.confirm('Are you sure you want to delete all items in cart?')
        if (confarm) {
            fetch('https://mr-foode-server.vercel.app/order', {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => { })
        }
    }

    const handleConfirmOrder = () => {
        if (orders.length === 0) {

        }
        else {
            fetch('https://mr-foode-server.vercel.app/order', {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Your order placed succssfully')
                    }
                })
        }
    }

    return (
        <div className='text-center m-20'>
            <h1 className='text-4xl font-bold ctext1 mb-10'>Wellcome to Your order page</h1>
            <div className='my-10'>
                <Link to='/'><button className='btn btn-ghost w-1/2 cbtn1'><HiArrowUturnLeft className='text-2xl w-20' />Go To Home</button></Link>
                <Link to='/order'><button className='btn btn-ghost w-1/2 cbtn1'>Buy Some More <HiArrowUturnRight className='text-2xl w-20' /></button></Link>
            </div>
            <div className='flex w-full'>
                <div className='w-2/3'>
                    {
                        orders.map(order => <Order
                            key={order._id}
                            order={order}
                            orders={orders}
                        ></Order>)
                    }
                </div>
                <div className=' w-1/3 cbor1 h-[500px]'>
                    <h1 className=' text-5xl font-bold text-cyan-300 mt-5'>Your Food Cart</h1>
                    <div className='text-start mt-10 ml-5'>
                        <p className='font-semibold text-[18px] mb-2'>Total Orders : {orders.length} Items</p>
                        <p className='font-semibold text-[18px] mb-2'>Total Food Price: {totalPrice} $</p>
                        <p className='font-semibold text-[18px] mb-2'>Tax: {totalTax} $</p>
                        <p className='font-semibold text-[18px] mb-2'>Delivery Charge: {
                            orders.length < 5 ?
                                <>
                                    {`free`}
                                </>
                                :
                                <>
                                    {deliveryCharge}
                                </>
                        } $</p>
                        <h1 className='text-2xl font-bold mt-10'>Grand Total : {
                            orders.length < 5 ?
                                <>
                                    {grandTotal}
                                </>
                                :
                                <>
                                    {grandTotal + parseInt(deliveryCharge)}
                                </>}</h1>
                    </div>
                    <div className=' mx-auto'>
                        {
                            orders.length === 0
                                ? <><button disabled onClick={handleConfirmOrder} className='btn btn-ghost cbtn1 mr-5 cbor1  mt-10 '>Confirm Order</button></>
                                : <><Link to='/settings/confirm'><button onClick={handleConfirmOrder} className='btn btn-ghost cbtn1 mr-5 cbor1  mt-10 '>Confirm Order</button></Link></>
                        }
                        {
                            orders.length === 0
                            ?<><button disabled onClick={handleDeleteAll} className='btn btn-ghost cbtn3 mt-10 cbor3 '>Delete Cart</button></>
                            :<><button onClick={handleDeleteAll} className='btn btn-ghost cbtn3 mt-10 cbor3 '>Delete Cart</button></>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;