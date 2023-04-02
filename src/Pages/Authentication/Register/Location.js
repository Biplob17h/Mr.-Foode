import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/UserContext';

const Location = () => {
    const {user, updateUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleOnSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const first = form.first.value;
        const last = form.last.value;
        const fullName = `${first} ${last}`
        const address = form.address.value;
        const district = form.district.value;
        const city = form.city.value;

        const userInfo = {
            name : fullName,
            address,
            district,
            city,
            email : user.email
        }
        const profile = {displayName : fullName}
        updateUser(profile)
        .then(()=>{
            console.log('user update successfully')
        })
        .catch((error)=>{
            console.log(error)
        })
        console.log(userInfo)
        
        fetch(`https://mr-foode-server.vercel.app/userinfo`, {
            method: `POST`,
            headers: {
                "Content-Type": `application/json`,
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast.success('User created successfully');
                navigate('/');
            }
        })
    }
    return (
        <div className='text-center m-20'>
            <h1 className='text-5xl font-bold'>One More step</h1>
            <h3 className='text-2xl font-semibold mt-5'>Your Address</h3>
            <form onSubmit={handleOnSubmit} className='w-[800px] mx-auto mt-10 cbor1 p-10'>
                <div className='flex gap-5'>
                    <input type="text" name='first' placeholder="first name" className="input input-bordered w-full" required/>
                    <input type="text" name='last' placeholder="last name" className="input input-bordered w-full" required/>
                </div>
                <div className='mt-5'>
                    <input type="text" name='address' placeholder="address (house/road/village/post/upazila)" className="input input-bordered w-full" required/>
                </div>
                <div className='flex gap-5 mt-5'>
                    <input type="text" name='district' placeholder="district" className="input input-bordered w-full" required/>
                    <input type="text" name='city' placeholder="city" className="input input-bordered w-full" required/>
                </div>
                <div className='mt-5'>
                        <button className='btn btn-ghost w-full cbtn1 cbor2' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Location;