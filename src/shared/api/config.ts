import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { cache } from 'react';

axios.defaults.withCredentials = true;

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

export const getQueryClient = cache(() => new QueryClient());
