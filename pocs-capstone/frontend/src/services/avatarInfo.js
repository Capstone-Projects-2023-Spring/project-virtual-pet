import axios from 'axios'
// import useAxiosPrivate from '../hooks/useAxiosPrivate';
import mockUser from '../mockData/info.js'

const baseURL = `${process.env.REACT_APP_DB_URL}/avatar/`

// NEED TO FIX: MOVE TO COMPONENTS THEMSELVES SINCE REACT HATES ME 

// MOCK call for now - returns fake avatar object 
const getAvatar = () => {
    // const axiosPrivate = useAxiosPrivate()
    // const request = axios.get(baseURL)
    // return request.then(response => response.data)
    return mockUser.avatarInfo
}


const updateAvatar = (avatarID, updatedAvatarInfo) => {
    // const axiosPrivate = useAxiosPrivate()
    const request = axios.put(`${baseURL}${avatarID}`, updatedAvatarInfo)
    return request.then(response => response.data)

}

const createAvatar = () => {
    // const axiosPrivate = useAxiosPrivate()
    const request = axios.post(baseURL)
    return request.then(response => response.data)
}

const exportObj = {getAvatar, updateAvatar, createAvatar}
export default exportObj

