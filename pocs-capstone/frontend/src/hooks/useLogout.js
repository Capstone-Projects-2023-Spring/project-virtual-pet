
import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios('/logout/blacklist', 
                {refresh_token:localStorage.getItem('refresh')}
            );
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout