import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: "https://api.sangdev.xyz/api/",
    withCredentials: true,
})