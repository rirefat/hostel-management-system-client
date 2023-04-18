import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/PublicContext';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({Children}) => {
    const {user} = useContext(AuthContext);
    if(user && user.uid){
        return Children;
    }
    <Navigate to={'/login'}></Navigate>
};

export default AdminRoute;