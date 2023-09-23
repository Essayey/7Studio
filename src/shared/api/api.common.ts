import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseUrl = 'http://185.244.172.108:8081/v1'

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: () => ({})
})
