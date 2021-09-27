import axios from 'axios'

const authAxios = axios.create({
    baseURL: '/api/auth',
    headers: {
        'Authorization': sessionStorage.getItem('token')
    }
})

const authUploadAxios = axios.create({
    baseURL: '/api/auth',
    headers: {
        'Authorization': sessionStorage.getItem('token'),
        'content-type': 'multipart/form-data'
    }
})

export { authAxios, authUploadAxios }