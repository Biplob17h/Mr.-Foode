import React, { useContext, useState } from 'react';
import LoginCarousel from '../../Shared/LoginCarousel/LoginCarousel';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/UserContext';



const Register = () => {
    const [error, setError] = useState('')
    const {signUp} = useContext(AuthContext)
    const navigate = useNavigate()


    const handleOnSubmit = event =>{
        setError('')
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signUp(email, password)
        .then((result)=>{
            const user = result.user;
            form.reset()
            console.log('user create successfully', user)
            navigate('/location')
        })
        .catch((error)=>{
            const errorCode = error.code;
            setError(errorCode)
        })
    }
    return (
        <div className="mt-20">

            <div className="hero-content ml-40 flex-row-reverse">
                <div className='w-1/2 mx-auto'>
                    <LoginCarousel></LoginCarousel>
                </div>
                <div className='w-1/2 mx-auto'>
                    <div className="card w-2/3   shadow-2xl bg-base-100">
                        <h1 className='font-serif font-bold text-5xl text-center text-[#19D3AE]'>Sign Up</h1>
                        <form onSubmit={handleOnSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            </div>
                            <div>
                                <p className='font-semibold text-red-600'>{error}</p>
                            </div>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="grid card ">
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-ghost cbtn1">Sign Up</button>
                                    </div>
                                </div>
                                <div className="divider">OR</div>
                               <h1 className='font-semibold text-center'>Alredy have an account? <Link to='/login' className='cbtn1 p-3 rounded-lg'>Login</Link> </h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;