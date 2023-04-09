import {useLocation,Navigate,Outlet} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequireAuth = () => {

    const {auth} = useAuth();
    const location = useLocation();


    return (
        
        //auth?.access
        auth?.access
            ? <Outlet />
            : <Navigate to="/landing" state={{from: location}} replace /> 
    );

}

export default RequireAuth;

