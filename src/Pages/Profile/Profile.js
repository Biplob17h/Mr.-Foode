import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../ContextApi/UserContext';
import { AiFillPlusSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(()=>{
            console.log('logout successfull')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const [address, setAddress] = useState({});
    useEffect(() => {
        fetch(`https://mr-foode-server.vercel.app/userinfo?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAddress(data))
    }, [user?.email])
    return (
        <div>
            <div className='m-20 relative'>
                <img className='rounded-full w-64 mx-auto  ' src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" />
                <input type="checkbox" id="notFoundModal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="notFoundModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">This Feature Not Available Right Now.</h3>
                    </div>
                </div>
                <label htmlFor="notFoundModal"><AiFillPlusSquare className='absolute bottom-4  left-[630px] text-5xl font-bold' /></label>

            </div>
            <div className='relative'>
                <div className='text ml-[530px] -mt-9'>
                    <h1 className='text-5xl font-bold'>{user?.displayName}</h1>
                    <div className=''>
                        <h1 className='mt-5 font-semibold text-xl'>Email : {address.email}</h1>
                        <h1 className='mt-5 font-semibold text-xl'>Address : {address.address}</h1>
                        <h1 className='mt-5 font-semibold text-xl '>District : {address.district}</h1>
                        <h1 className='mt-5 font-semibold text-xl '>City : {address.city}</h1>
                    </div>
                </div>
            </div>
            <div  className='flex justify-center mt-10 mb-10'>
                <button className='cbtn1 cbor1 rounded-lg p-4 mr-40'><Link to='/'>Go To Home</Link></button>
                <button onClick={handleLogOut} className='cbtn1 cbor1 rounded-lg p-4'><Link to='/'>Logout</Link></button>
            </div>
        </div>
    );
};

export default Profile;