
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import axiosPrivate from '../hooks/useAxiosPrivate'
const baseURL = `${process.env.REACT_APP_DB_URL}/tasks/`

// NEED TO FIX: DELETE THIS CLOWN

const getTasks = () => {
    const axiosPrivate = useAxiosPrivate()
    const request = axiosPrivate.get(baseURL)  
    console.log("REQUEST HERE: ", request)
    return request.then(response => response.data)
}

const createTask = (newTask) => {
    const axiosPrivate = useAxiosPrivate()
    const request = axiosPrivate.post(baseURL, newTask)
    return request.then(response => response.data)
}

const updateTask = (taskID, updatedTask) => {
    const axiosPrivate = useAxiosPrivate()
    const request = axiosPrivate.put(`${baseURL}${taskID}/`, updatedTask)
    return request.then(response => response.data)

}

const deleteTask = (taskID) => {
    const axiosPrivate = useAxiosPrivate()
    const request = axiosPrivate.delete(`${baseURL}${taskID}/`)
    return request.then(response => response.data)
}

const exportObj = {getTasks, createTask, updateTask, deleteTask}
export default exportObj

