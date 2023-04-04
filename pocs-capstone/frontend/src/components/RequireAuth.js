import {useLocation,Navigate,Outlet} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = () => {

    const {auth} = useAuth();
    const location = useLocation();
    const refresh = localStorage.getItem("refresh")
    console.log("---------->",refresh)

    console.log(auth?.email);
    console.log(auth?.access);

    return (
        
        //auth?.access
        refresh
            ? <Outlet />
            : <Navigate to="/landing" state={{from: location}} replace /> 
    );

}

export default RequireAuth;

