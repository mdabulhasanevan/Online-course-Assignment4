import React, { Children, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const navigate=useNavigate();
    const {user}=useContext(AuthContext);

    if(user)
    {
        return children;
    }
    else{
        return navigate("/login");
    }
   
}
export default PrivateRoute;
