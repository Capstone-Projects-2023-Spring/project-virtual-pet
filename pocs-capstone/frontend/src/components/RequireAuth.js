import {useLocation,Navigate,Outlet} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = () => {

    const {auth} = useAuth();
    const location = useLocation();
    console.log(auth?.email);
    console.log(auth?.access)
    return (
        
        auth?.access
            ? <Outlet />
            : <Navigate to="/login" state={{from: location}} replace />
    );

}

export default RequireAuth;

