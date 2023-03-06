

import axios from 'axios'
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4MTE2OTEyLCJpYXQiOjE2NzgxMTY4NTIsImp0aSI6ImNkNzY3MWY2Njg5MzQyY2NiOGE3MjAwNmNiZDFhYjFmIiwidXNlcl9pZCI6NX0.t2m4I1a1Wnv2HWhILYIv5OAHMZs73a-NUYpWwPpVyLE"
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
const baseURL = `${process.env.REACT_APP_DB_URL}/api`


// FIGURE OUT :

const getTasks = () => {
    console.log(process.env.REACT_APP_DB_URL)
    const request = axios.get(`${baseURL}`,
    {
        headers: config
    })
    return request.then(response => response.data)
}

const createTask = (newNote) => {
    const request = axios.post(baseURL, newNote)
    return request.then(response => response.data)
}

const updateTask = (noteID, updatedNote) => {
    const request = axios.put(`${baseURL}/${noteID}`, updatedNote)
    return request.then(response => response.data)

}

const exportObj = {getTasks, createTask, updateTask}
export default exportObj

