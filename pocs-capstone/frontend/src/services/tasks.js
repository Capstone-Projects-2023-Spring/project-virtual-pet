

import axios from 'axios'
import mockUser from '../mockData/info.js'
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4MTE2OTEyLCJpYXQiOjE2NzgxMTY4NTIsImp0aSI6ImNkNzY3MWY2Njg5MzQyY2NiOGE3MjAwNmNiZDFhYjFmIiwidXNlcl9pZCI6NX0.t2m4I1a1Wnv2HWhILYIv5OAHMZs73a-NUYpWwPpVyLE"
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
const baseURL = `${process.env.REACT_APP_DB_URL}/tasks/`


const getTasks = () => {
    console.log(process.env.REACT_APP_DB_URL)
    const request = axios.get(baseURL, config)
    return request.then(response => response.data)
}

const createTask = (newTask) => {
    const request = axios.post(baseURL, newTask)
    return request.then(response => response.data)
}

const updateTask = (taskID, updatedTask) => {
    const request = axios.put(`${baseURL}${taskID}/`, updatedTask, config)
    return request.then(response => response.data)

}

const exportObj = {getTasks, createTask, updateTask}
export default exportObj

