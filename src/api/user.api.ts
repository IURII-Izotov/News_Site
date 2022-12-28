import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";



export const baseUrl='https://megalab.pythonanywhere.com/';


export const fetchUserApi = createApi({
    reducerPath: 'api/user',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://megalab.pythonanywhere.com/',
        headers:{ "Authorization": "Token 4636db43fb079c6778743830cccdb72bfe1aebae"
    } }),
    endpoints: (builder) => ({
        getUser: builder.query<any, void>({
            query: () => `user`,
        }),

    }),
})
export const {}=fetchUserApi
