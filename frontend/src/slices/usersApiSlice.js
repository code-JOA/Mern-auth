import { apiSlice } from './apiSlice';

const USERS_URL = '/api/users';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        query: (data) => ({
            url: `${USERS_URL}/auth`,
            method: 'POST',
            body: data
        })
    })
})
