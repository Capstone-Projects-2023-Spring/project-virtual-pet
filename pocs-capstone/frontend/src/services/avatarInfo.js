import axios from 'axios'
import mockUser from '../mockData/info.js'

const baseURL = `${process.env.REACT_APP_DB_URL}/avatar/`

const getAvatar = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
    // return mockUser.avatarInfo
}

const updateAvatar = (avatarID, updatedAvatarInfo) => {
    const request = axios.put(`${baseURL}${avatarID}`, updatedAvatarInfo)
    return request.then(response => response.data)

}

const createAvatar = () => {
    const request = axios.post(baseURL)
    return request.then(response => response.data)
}

const exportObj = {getAvatarInfo, updateAvatarInfo, createAvatar}
export default exportObj

