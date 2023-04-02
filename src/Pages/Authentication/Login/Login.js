import React, { useContext, useState } from 'react';
import LoginCarousel from '../../Shared/LoginCarousel/LoginCarousel';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/UserContext';



const Login = () => {
    const [error, setError] = useState('')
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleOnSubmit = event => {
        setError('')
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then((result)=>{
            const user = result.user;
            console.log('user login successfully', user)
            navigate('/')
        })
        .then((error)=>{
            const errorCode = error?.code;
            setError(errorCode)
            console.log(errorCode)
        })
    }
    return (
        <div className="mt-20">

            <div className="hero-content flex-row">
                <div className='w-1/2'>
                    <LoginCarousel></LoginCarousel>
                </div>
                <div className='w-1/2'>
                    <div className="card w-2/3   shadow-2xl bg-base-100">
                        <h1 className='font-serif font-bold text-5xl text-center text-[#19D3AE]'>Login</h1>
                        <form onSubmit={handleOnSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                                <div className='font-semibold text-red-600'>
                                    {error}
                                </div>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="grid card ">
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-ghost cbtn1">Login</button>
                                    </div>
                                </div>
                                <div className="divider">OR</div>
                               <h1 className='font-semibold text-center'>Don't have an account? <Link to='/register' className='cbtn1 p-2 rounded-lg'>Sign UP</Link> </h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;