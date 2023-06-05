import { createApi, FetchBaseQuery } from '@reduxjs/toolkit/Query/React';


const baseQuery = fetchBaseQuery({ baseUrl: '' });

export const apiSlice = createApi({ 
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({}),
});

import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
