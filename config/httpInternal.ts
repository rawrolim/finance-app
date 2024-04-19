import axios from "./http";

const headersDefault = { 
    headers: { 
    "Authorization": '',
    endpoint: '' 
} 
}

const httpInternal = {
    get: async (uri='', instancia = 0) => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token && instancia < 2) {
            headersDefault.headers.Authorization = token;
            headersDefault.headers.endpoint = uri
            try {
                const res = await axios.get('middleware', headersDefault);
                return res.data;
            } catch (e) {
                if (e.response.status == 401) {
                    await refreshToken();
                    return httpInternal.get(uri, instancia + 1);
                } else {
                    return e.response;
                }
            }
        }
    },

    post: async (uri='', data={}, instancia = 0) => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token && instancia < 2) {
            headersDefault.headers.Authorization = token;
            headersDefault.headers.endpoint = uri
            try {
                const res = await axios.post(process.env.URL_BACKEND + uri, data, headersDefault);
                return res.data;
            } catch (e) {
                if (e.response.status == 401) {
                    await refreshToken();
                    return httpInternal.post(uri, data, instancia + 1);
                } else {
                    return e.response;
                }
            }
        }
    },

    put: async (uri='', data={}, instancia = 0) => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token && instancia < 2) {
            headersDefault.headers.Authorization = token;
            headersDefault.headers.endpoint = uri
            try {
                const res = await axios.put(process.env.URL_BACKEND + uri, data, headersDefault);
                return res.data;
            } catch (e) {
                if (e.response.status == 401) {
                    await refreshToken();
                    return httpInternal.put(uri, data, instancia + 1);
                } else {
                    return e.response;
                }
            }
        }
    },

    delete: async (uri='', instancia = 0) => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token && instancia < 2) {
            headersDefault.headers.Authorization = token;
            headersDefault.headers.endpoint = uri
            try {
                const res = await axios.delete(process.env.URL_BACKEND + uri, headersDefault);
                return res.data;
            } catch (e) {
                if (e.response.status == 401) {
                    await refreshToken();
                    return httpInternal.delete(uri, instancia + 1);
                } else {
                    return e.response;
                }
            }
        }
    },
}

export default httpInternal;

async function refreshToken() {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
        const res = await axios.post('refresh_token',
            {},
            {
                headers: {
                    "Authorization": token
                }
            }
        );
        localStorage.setItem('token', JSON.stringify(res.data));
    }
}
