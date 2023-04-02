import React, { useContext } from 'react';
import { AuthContext } from '../ContextApi/UserContext';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <button className=" btn btn-square loading w-[200px]"><span className='ml-3'>loading</span></button>
    }
    if(user?.email){
        return children
    }
    else{
        toast.success('you need  sign in to order');
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRoutes;