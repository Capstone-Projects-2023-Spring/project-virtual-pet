import axios from 'axios'


const baseURL = process.env.REACT_APP_DB_URL

const getAll = () => {
    console.log(process.env.REACT_APP_DB_URL)
    const request = axios.get(baseURL)
    
    return request.then(response => {
        console.log(response)
        return response.data
    })
}

const createNote = (newNote) => {
    const request = axios.post(baseURL, newNote)
    return request.then(response => response.data)
}


const exportObj = {getAll, createNote}
export default exportObj

