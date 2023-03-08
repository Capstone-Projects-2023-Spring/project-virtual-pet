

import axios from 'axios'
import mockUser from '../mockData/info.js'
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4MjQxMDU5LCJpYXQiOjE2NzgyMzkyNTksImp0aSI6ImM1ZWNjYjNhZWNhZTRmZDI4NmE0NDVjZjg2YTAyN2VhIiwidXNlcl9pZCI6MX0.ICRmHijTXeTjgKtCrvYfNjd6_mWRcHk9bS7N8ErDMTI"
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
const baseURL = `${process.env.REACT_APP_DB_URL}tasks/`


const getTasks = () => {

    const request = axios.get(baseURL, config)
    return request.then(response => response.data)
}

const createTask = (newTask) => {
    const request = axios.post(baseURL, newTask, config)
    return request.then(response => response.data)
}

const updateTask = (taskID, updatedTask) => {
    const request = axios.put(`${baseURL}${taskID}/`, updatedTask, config)
    return request.then(response => response.data)

}


const deleteTask = (taskID) => {
    const request = axios.delete(`${baseURL}${taskID}/`, config)
    return request.then(response => response.data)
}

const exportObj = {getTasks, createTask, updateTask, deleteTask}
export default exportObj

