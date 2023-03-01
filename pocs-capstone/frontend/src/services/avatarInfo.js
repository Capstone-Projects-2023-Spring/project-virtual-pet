import axios from 'axios'

const baseURL = `${process.env.REACT_APP_DB_URL}/api`


// baseURL/avatars/${avatarID}
const getAvatarInfo = (avatarID) => {
    const request = axios.get(`${baseURL}/avatars/${avatarID}`)
    return request.then(response => response.data)
}

// baseURL/avatars/${avatarID}
const updateAvatarInfo = (avatarID, updatedAvatarInfo) => {
    const request = axios.put(`${baseURL}/avatars/${avatarID}`, updatedAvatarInfo)
    return request.then(response => response.data)

}
const exportObj = {getAvatarInfo, updateAvatarInfo}
export default exportObj

