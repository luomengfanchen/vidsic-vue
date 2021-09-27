import axios from 'axios'

const normalAxios = axios.create({
    baseURL: '/api'
})

export { normalAxios }
