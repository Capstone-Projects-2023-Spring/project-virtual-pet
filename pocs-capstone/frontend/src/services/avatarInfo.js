import axios from 'axios'
import mockUser from '../mockData/info.js'

const baseURL = `${process.env.REACT_APP_DB_URL}/api`


// baseURL/avatars/${avatarID}
const getAvatarInfo = (avatarID, username) => {
    // const request = axios.get(`${baseURL}/avatars/${avatarID}`)
    // return request.then(response => response.data)
    return mockUser.avatarInfo
}

// baseURL/avatars/${avatarID}
const updateAvatarInfo = (avatarID, updatedAvatarInfo, username) => {
    const request = axios.put(`${baseURL}/avatars/${avatarID}`, updatedAvatarInfo)
    return request.then(response => response.data)

}
const exportObj = {getAvatarInfo, updateAvatarInfo}
export default exportObj

