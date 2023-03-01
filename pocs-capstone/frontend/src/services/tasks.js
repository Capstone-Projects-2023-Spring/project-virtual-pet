

import axios from 'axios'

const baseURL = `${process.env.REACT_APP_DB_URL}/api`


// FIGURE OUT :

const getTasks = (taskID, username) => {
    console.log(process.env.REACT_APP_DB_URL)
    const request = axios.get(`${baseURL}/tasks/${taskID}/username?=${username}`)
    return request.then(response => response.data)
}

const createTask = (newNote) => {
    const request = axios.post(baseURL, newNote)
    return request.then(response => response.data)
}

const updateTask = (noteID, updatedNote) => {
    const request = axios.put(`${baseURL}/${noteID}`, updateNote)
    return request.then(response => response.data)

}

const exportObj = {getTasks, createTask, updateTask}
export default exportObj

