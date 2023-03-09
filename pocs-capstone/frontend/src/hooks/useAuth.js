import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    //console.log(AuthContext)
    return useContext(AuthContext);
}

export default useAuth;