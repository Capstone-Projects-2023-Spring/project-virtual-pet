import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {

    const {setAuth} = useAuth();

    const refresh = async () => {
        const response = await axios.get('api/token/refresh/',{withCredentials: true});
        setAuth(prev =>{
            //console.log(JSON.stringify(prev));
            //console.log(response.data.accessToken);
            return {...prev,accessToken: response.data.access} //token?? not accessToken??
        });
        return response.data.access; //TODO I think this should just be access!  
    }
    return refresh;

};


export default useRefreshToken;











