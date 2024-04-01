import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base_url = process.env.REACT_APP_SITE_BASE_URL_FIREBASE

export const pricesApi = createApi ({
    reducerPath : "pricesApi",
    baseQuery : fetchBaseQuery({ 
        baseUrl : base_url, 
    
    }),
    endpoints : (builder) => ({
        getPrices : builder.query({
            query : () => `prices.json`
        }),
    })
})

export const {
    useGetPricesQuery, 
} 
    = pricesApi