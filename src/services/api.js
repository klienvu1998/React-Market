import axios from '../utils/axios-customize'

export const registerUser = (fullName, email, password, phone) => {
    return axios.post('/api/v1/user/register', { fullName, email, password, phone })
}

export const loginUser = (email, password) => {
    return axios.post('/api/v1/auth/login', { username: email, password })
}