

import axios from 'axios'
import mockUser from '../mockData/info.js'

const baseURL = `${process.env.REACT_APP_DB_URL}/api`

const getInventory = (username) => {
    // const request = axios.get(baseURL)
    // return request.then(response => response.data)
    return mockUser.inventory
}

const createInventoryItem = (newNote) => {
    const request = axios.post(baseURL, newNote)
    return request.then(response => response.data)
}

const updateInventory = (inventoryID, updatedInvItem) => {
    const request = axios.put(`${baseURL}/${inventoryID}`, updatedInvItem)
    return request.then(response => response.data)

}

const exportObj = {getInventory, createInventoryItem, updateInventory}
export default exportObj

