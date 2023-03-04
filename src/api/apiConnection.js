import axios from 'axios'

const apiConnection = axios.create({
    //baseURL:'http://localhost:8080/api',
    //
    baseURL : 'https://charlies-website-back-production-afcf.up.railway.app/',
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

apiConnection.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    let response = error?.response?.data;
    if (response?.httpStatus === "UNAUTHORIZED" || (response?.httpStatus === "BAD_REQUEST" && response?.message?.includes("Sesión expirada"))) {
        localStorage.removeItem("token");
        window.location.replace("/");
    }
    return Promise.reject(error);
});

export default apiConnection