

import axios from 'axios'
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4MzI5MTY2LCJpYXQiOjE2NzgzMjczNjYsImp0aSI6ImUyZGJmYWNiYjQ5NzQ2ODE4Mjk3YWM0ODY0YmI4YjllIiwidXNlcl9pZCI6MX0.l9vynSPYyJQ6qD7yE6PJV-k77FpuBUOoCsyr2gxU2Ew"

const config = {
    headers: { Authorization: `Bearer ${token}` }
};
const baseURL = `${process.env.REACT_APP_DB_URL}/tasks/`


const getTasks = () => {
    console.log(baseURL)
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

