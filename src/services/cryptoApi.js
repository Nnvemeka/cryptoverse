import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '0e5b3c24f7mshebcd30c107e2872p1564a0jsnddfc087a3510',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'crptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
})

export const { useGetCryptosQuery } = cryptoApi
