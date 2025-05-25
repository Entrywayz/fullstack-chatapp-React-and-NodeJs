import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://fullstack-chatapp-react-and-nodejs.onrender.com/api/",
    withCredentials: true
})
