import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('api/token/refresh', {
         //   withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.access);
            return { ...prev, access: response.data.access }
        });
        return response.data.access;
    }
    return refresh;
};

export default useRefreshToken;


