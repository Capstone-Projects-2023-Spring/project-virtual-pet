import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const refresh = localStorage.getItem("refresh")
        console.log("REFRESH -----> ",refresh)
        const response = await axios.post('api/token/refresh/', 
        {"refresh":refresh},
        {

            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.access);
            return {
                ...prev,
                //roles: response.data.roles,
                access: response.data.access
            }
        });
        return response.data.access;
    }
    return refresh;
};

export default useRefreshToken;

