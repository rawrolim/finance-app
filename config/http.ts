import axios from "axios";

const http = axios.create({
    headers: {
        empresa_id: process.env.AUTH_EMPRESA_ID,
        app_id: process.env.AUTH_APP_ID,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    baseURL: process.env.AUTH_URL
});

export default http;