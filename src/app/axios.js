import axios from 'axios'

const baseURL = "http://192.168.10.5:8000"

const instance = axios.create({
    baseURL: baseURL,
});
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token")
        config.headers.Authorization = `Token ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance