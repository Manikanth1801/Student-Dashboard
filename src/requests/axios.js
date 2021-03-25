import axios from 'axios';

const Instance = axios.create({
    baseURL:"localhost:4000/login",
})

export default Instance;