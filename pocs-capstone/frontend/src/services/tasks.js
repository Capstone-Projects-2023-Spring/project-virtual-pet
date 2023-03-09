

import axios from 'axios'
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4Mzk2NDg1LCJpYXQiOjE2NzgzOTQ2ODUsImp0aSI6ImE5MzBhYTIxZWZmNzQxZmVhOTFkZmFjOWU0YzgyZGUxIiwidXNlcl9pZCI6MX0.3RM8J4wAD8nPP5UeVmWdjB7aOGGzzOxZMH9mIGI7dtE"

const config = {
    headers: { Authorization: `Bearer ${token}` }
};
const baseURL = `${process.env.REACT_APP_DB_URL}/tasks/`


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

