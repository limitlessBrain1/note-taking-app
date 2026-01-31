import axios from "axios"

const BACKEND_URL = axios.create({
    baseURL: "http://localhost:4002/api/v1/noteapp/"
})

export default BACKEND_URL