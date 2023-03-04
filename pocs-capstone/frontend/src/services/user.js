import axios from 'axios'
import mockUser from '../mockData/info.js'

const baseURL = `${process.env.REACT_APP_DB_URL}/api`

const getUserInfo = (username) => {
    // const request = axios.get(`${baseURL}/users/username?=${username}`)
    // return request.then(response => response.data)
    return mockUser.userInfo
}

// do query attributes always have to be at the end ? or can i include it in the baseURL 
const updateUserInfo = (userID, userUpdate, username) => {
    const request = axios.put(`${baseURL}/users/${userID}/username?=${username}`, userUpdate)
    return request.then(response => response.data)
}

const exportObj = {getUserInfo, updateUserInfo}
export default exportObj

