

import axios from 'axios'
import mockData from '../mockData/info'
const baseURL = `${process.env.REACT_APP_DB_URL}/api`


// FIGURE OUT :

const getTasks = (username) => {
    // console.log(process.env.REACT_APP_DB_URL)
    // const request = axios.get(`${baseURL}/tasks/username?=${username}`)
    // return request.then(response => response.data)
    return mockData.tasks
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

