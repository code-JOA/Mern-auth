import { createApi, FetchBaseQuery } from '@reduxjs/toolkit/Query/React';


const baseQuery = fetchBaseQuery({ baseUrl: '' });

export const apiSlice = createApiSlice({ 
    baseQuery,
    tagTypes: ['']
}) 