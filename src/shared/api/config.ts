import axios from 'axios';

export const $api = axios.create({
    withCredentials: true,
    baseURL: __API__,
});

export const axiosAuth = axios.create({
    withCredentials: true,
    baseURL: __API__,
    headers: { 'Content-Type': 'application/json' },
});

export const setAuthToken = (token?: string) => {
    if (!!token) {
        $api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete $api.defaults.headers.common['Authorization'];
    }
};
