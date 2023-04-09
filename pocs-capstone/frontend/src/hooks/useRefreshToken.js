import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const refresh = localStorage.getItem("refresh");
    const response = await axios.post(
      "token/refresh/",
      { refresh: refresh },
    );
    if (response.status !== 200) {
      localStorage.removeItem("refresh");
      setAuth({});
      return;
    }
    setAuth((prev) => {
      return {
        ...prev,
        access: response.data.access,
      };
    });
    return response.data.access;
  };
  return refresh;
};

export default useRefreshToken;
