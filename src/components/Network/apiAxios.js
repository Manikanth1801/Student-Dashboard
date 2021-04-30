import axios from 'axios';
import config from './config'

const instance = axios.create({
    baseURL: config.WS_BASE_URL,
});
let details = JSON.parse(localStorage.getItem('details'))

instance.interceptors.request.use(async (config) => {
    const token = details.accesstoken;
    config.headers.Authorization = (token ? token : '');
    config.headers.ContentType = 'application/json';
    return config;
});

const logout = async token => (
    await instance.post('/logout', {
        token
    })
);
export const confirmRegister = async id => (
    await instance.post(`/confirm/${id}`)
);

export const forgotPassword = async email => (
    await instance.post('/forgotpassword', {
        email
    })
);

export const confirmReset = async (id, password) => (
    await instance.post(`/resetpass/${id}`, {
        password
    })
);


export default logout;